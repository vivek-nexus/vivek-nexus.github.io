import { AnimatePresence, motion } from "motion/react"
import { transitionSpring, transitionTween } from "../hero"
import { NavItem } from "./NavItem"
import { useEffect, useState } from "react"
import { useGlobalStore } from "@/stores/GlobalStore"


export function Nav() {
    const [animationName, setAnimationName] = useState("firstAnimation")
    const { showEasterEggMessage, setShowEasterEggMessage, tooltipInvokedCount } = useGlobalStore()

    useEffect(() => {
        let showEasterEggMessageTimeout: NodeJS.Timeout
        if (showEasterEggMessage) {
            showEasterEggMessageTimeout = setTimeout(() => {
                setShowEasterEggMessage(false)
            }, 3000)
        }

        return () => clearTimeout(showEasterEggMessageTimeout)
    }, [showEasterEggMessage])

    useEffect(() => {
        if (tooltipInvokedCount > 1 && tooltipInvokedCount <= 4) {
            setShowEasterEggMessage(true)
        }
    }, [tooltipInvokedCount])

    return (
        <motion.nav
            className={`fixed w-fit z-50 top-0 left-1/2 -translate-x-1/2 mx-auto bg-black1/50 border-b border-l border-r border-white3 backdrop-blur-md rounded-b-2xl overflow-clip transition-all duration-500 ease-in-out ${showEasterEggMessage ? `max-h-24 md:max-h-28` : `max-h-14 md:max-h-20`}`}
            initial={{ opacity: 0 }}
            animate={animationName}
            variants={{
                firstAnimation: {
                    opacity: 0.01,
                    transition: transitionTween
                },
                secondAnimation: {
                    opacity: 1,
                    transition: transitionSpring
                },
            }}
            onAnimationComplete={() => {
                if (animationName === "firstAnimation") {
                    setAnimationName("secondAnimation")
                }
            }}
        >
            <ul className="flex">
                <NavItem alphabet="V" />
                <NavItem alphabet="D" />
                <NavItem alphabet="E" />
                <NavItem alphabet="A" />
                <NavItem alphabet="R" />
            </ul>
            <AnimatePresence>
                {showEasterEggMessage &&
                    <motion.p
                        className="text-center text-black text-sm md:text-base -mt-1 py-1 bg-white/75"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                    >
                        You found an easter egg, smarty pants!
                    </motion.p>
                }
            </AnimatePresence>
        </motion.nav>
    )
}