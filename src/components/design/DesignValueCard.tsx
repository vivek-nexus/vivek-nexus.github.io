import { designValues } from "@/constants/designValues"
import { hexToRgba } from "@/lib/utils"
import { motion } from "motion/react"
import { useEffect, useRef, useState } from "react"


export function DesignValueCard({ number, className }: { number: 1 | 2 | 3 | 4, className?: string }) {
    const [showText1, setShowText1] = useState(true)
    const [showText2, setShowText2] = useState(false)
    const card = useRef<HTMLDivElement>(null)

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

    function getRotation(number: number) {
        switch (number) {
            case 1:
                return `lg:-rotate-6`
            case 2:
                return `lg:rotate-6`
            case 3:
                return `lg:-rotate-12`
            case 4:
                return `lg:rotate-12`
            default:
                break
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

    return (
        <div
            ref={card}
            className={`design-value-card relative w-36 md:w-48 lg:w-64 h-24 md:h-36 lg:h-48 rounded-xl lg:rounded-3xl ${getRotation(number)} flex justify-center items-center text-base md:text-lg lg:text-2xl ${className ? className : ``}`}
            style={{
                // Gradient border
                border: "solid 1px transparent",
                backgroundImage: `linear-gradient(180deg, var(--black-1) 0%, color-mix(in oklab, var(--primary-blue), var(--black-1) 85%) 100%), linear-gradient(180deg, var(--primary-green) 0%, var(--primary-blue) 100%)`,
                backgroundOrigin: "border-box",
                backgroundClip: "padding-box, border-box",
            }}
            role="tooltip"
            tabIndex={0}
            onMouseOver={handleMouseEnter}
            onMouseLeave={handleMouseOut}
            onFocus={handleMouseEnter}
            onBlur={handleMouseOut}
            // Touch events added to the ref
            aria-label={`${designValues[number].text1}, ${designValues[number].text2.toLowerCase()}`}
        >
            {showText1 &&
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
                    className="text-center font-extralight text-white2 p-6">
                    {designValues[number].text1}
                </motion.p>}
            {showText2 &&
                <motion.p
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
                    className="text-center font-extralight text-primaryGreen p-6">
                    {designValues[number].text2}
                </motion.p>}
            <div
                className="absolute -bottom-14 lg:-bottom-16 w-full h-1/4 rounded-2xl blur-md -z-10 pointer-events-none"
                style={{
                    background: `linear-gradient(180deg, ${hexToRgba("--primary-blue", 0.15)} 5.12%, #101010 100%)`
                }}
            >
            </div>
        </div>
    )
}