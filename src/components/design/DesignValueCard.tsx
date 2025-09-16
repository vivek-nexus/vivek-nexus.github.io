import { designValues } from "@/constants/designValues"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"
import { useInView } from "react-intersection-observer"


export function DesignValueCard({ number, className }: { number: 1 | 2 | 3 | 4, className?: string }) {
    const [showText1, setShowText1] = useState(true)
    const [showText2, setShowText2] = useState(false)
    const card = useRef<HTMLButtonElement>(null)
    const { ref, inView } = useInView({ threshold: 0, triggerOnce: true })

    function handleMouseEnter() {
        setShowText1(false)
        setShowText2(true)
    }
    function handleMouseOut() {
        setShowText2(false)
        setShowText1(true)
    }

    function handleTouch(e: TouchEvent) {
        e.preventDefault()
        setShowText1(showText1 => !showText1)
        setShowText2(showText2 => !showText2)
    }

    function handleClickOutside(e: MouseEvent) {
        if (card.current && !card.current.contains(e.target as Node)) {
            setShowText1(true)
            setShowText2(false)
        }
    }

    useEffect(() => {
        // React synthetic events don't support passive false, which is needed to call event.preventDefault() to cancel mouse events https://web.dev/articles/mobile-touchandmouse#1_-_clicking_and_tapping_-_the_natural_order_of_things
        card.current?.addEventListener("touchstart", handleTouch, { passive: false })
        document.addEventListener("mousedown", handleClickOutside)
        return () => {
            card.current?.removeEventListener("touchstart", handleTouch)
            document.removeEventListener("mousedown", handleClickOutside)
        }
    }, [])

    useEffect(() => {
        if ((number === 1) || (number === 2)) {
            setShowText1(false)
            setShowText2(true)
            const timeOut = setTimeout(() => {
                setShowText1(true)
                setShowText2(false)
            }, 1500)
            return (() => {
                clearTimeout(timeOut)
            })
        }
    }, [inView])

    return (
        <button
            ref={ref}
            className={`design-value-card group cursor-default relative w-36 md:w-48 lg:w-64 h-24 md:h-36 lg:h-48 rounded-xl lg:rounded-3xl overflow-clip flex justify-center items-center text-base md:text-lg lg:text-2xl will-change-transform ${className ? className : ``}`}
            style={{
                // Gradient border
                border: "solid 1px transparent",
                backgroundImage: `linear-gradient(180deg, var(--black-1) 0%, color-mix(in oklab, var(--primary-blue), var(--black-1) 85%) 100%), linear-gradient(180deg, var(--primary-green) 0%, var(--primary-blue) 100%)`,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
            }}
            tabIndex={0}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseOut}
            onFocus={handleMouseEnter}
            onBlur={handleMouseOut}
            // Touch events added to the ref
            aria-label={`${designValues[number].text1}, ${designValues[number].text2.toLowerCase()}`}
        >
            {/* Circle background */}
            <div className={`absolute ${showText1 && `bottom-0`} ${showText2 && `-bottom-16`} duration-300 ease-in-out flex items-end ${number % 2 === 0 ? `right-0 -scale-x-100` : `left-0`} w-1/2 h-1/2`}>
                <img src="/images/bg-circles.svg" alt="" />
            </div>
            {/* Square background */}
            <div className={`absolute ${showText1 && `-top-16`} ${showText2 && `top-0`} duration-300 ease-in-out flex items-start justify-end ${number % 2 === 0 ? `left-0 -scale-x-100` : `right-0`} w-1/2 h-1/2`}>
                <img src="/images/bg-squares.svg" alt="" />
            </div>
            {showText1 &&
                <motion.p
                    initial={{ y: 64, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: -64, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-center font-extralight text-white2 p-6">
                    {designValues[number].text1},
                </motion.p>}
            {showText2 &&
                <motion.p
                    initial={{ y: -64, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    exit={{ y: 64, opacity: 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="text-center font-extralight text-primaryGreen p-6">
                    {designValues[number].text2}
                </motion.p>}
        </button>
    )
}