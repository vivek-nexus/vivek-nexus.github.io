import { motion } from "motion/react"
import { useCallback, useEffect, useRef, useState } from "react"
// import { LeftBrain } from "./LeftBrain"
// import { RightBrain } from "./RightBrain"
import { BackgroundLines } from "../ui/background-lines"
import { useGlobalStore } from "@/stores/GlobalStore"
import { useInView } from "react-intersection-observer"


export const transitionTween = {
    type: "tween",
    ease: [0.48, 0.01, 0.4, 1.4],
    duration: 2,
}

export const transitionSpring = {
    type: "spring",
    stiffness: 460.8,
    damping: 48,
    mass: 1,
    duration: 0.25
}

const landscapeGraphicWidth = 1440
const portraitGraphicWidth = 900
const graphicHeight = 540


export function Hero() {
    const [animationName, setAnimationName] = useState("firstAnimation")
    // const [isAnimationComplete, setIsAnimationComplete] = useState(false)
    const [timeStamp, setTimeStamp] = useState(Date.now())
    const [isLandscape, setIsLandscape] = useState(true)
    const [scale, setScale] = useState(1)
    const heroGraphic = useRef<HTMLDivElement>(null)


    const { ref: inViewRef, inView } = useInView({ threshold: 0.75 })
    const { setShowEasterEggMessage, setActiveSection } = useGlobalStore()


    function handleResize() {
        if (heroGraphic.current) {
            // Landscape orientation
            if (document.documentElement.clientWidth > document.documentElement.clientHeight) {
                setIsLandscape(true)
                setScale(heroGraphic.current?.clientWidth / landscapeGraphicWidth)
            }
            // Portrait orientations
            else {
                setIsLandscape(false)
                setScale(heroGraphic.current?.clientWidth / portraitGraphicWidth)
            }
        }
    }

    function handleBrainClick() {
        setTimeStamp(Date.now())
        setAnimationName("firstAnimation")
        setShowEasterEggMessage(true)
        // setIsAnimationComplete(false)
    }

    useEffect(() => {
        handleResize()
        window.addEventListener("resize", handleResize)
        return () => window.removeEventListener("resize", handleResize)
    }, [])


    // Use `useCallback` so we don't recreate the function on each render
    const setRefs = useCallback(
        (node: HTMLDivElement) => {
            // Ref's from useRef needs to have the node assigned to `current`
            heroGraphic.current = node
            // Callback refs, like the one from `useInView`, is a function that takes the node as an argument
            inViewRef(node)
        },
        [inViewRef])

    useEffect(() => {
        if (inView) {
            setActiveSection("V")
        }
    }, [inView])

    return (
        <motion.section
            ref={setRefs}
            className="max-w-[1440px] mx-auto mt-16 md:mt-24 pb-12 md:pb-24 overflow-x-clip flex flex-col items-center"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 100,
                transition: {
                    duration: 1,
                    ease: "easeIn"
                }
            }}
        >
            <div
                className="flex justify-center items-center"
                style={{
                    width: scale * (isLandscape ? landscapeGraphicWidth : portraitGraphicWidth),
                    height: scale * graphicHeight,
                }}
            >
                {/* 
                - The whole div is scaled as if it is an image. Scale calculated with 1480px as the design width.
                - Scaling only reduces the element visually. Explicit height and width reduction also necessary so that the background gradient can appear normally.
                */}
                <motion.div
                    key={timeStamp}
                    style={{
                        width: isLandscape ? landscapeGraphicWidth : portraitGraphicWidth,
                        height: graphicHeight,
                        transform: `scale(${scale})`,
                    }}
                    className={`relative grid grid-cols-2 font-extralight whitespace-nowrap`}
                    initial={{
                        background: "radial-gradient(41.02% 54.97% at 50% 50%, #101010 14.36%, #101010 60.9%)",
                    }}
                    animate={animationName}
                    variants={{
                        firstAnimation: {
                            background: "radial-gradient(41.02% 54.97% at 50% 50%, #111111 14.36%, #101010 60.9%)",
                            transition: transitionTween,
                        },
                        secondAnimation: {
                            background: "radial-gradient(41.02% 54.97% at 50% 50%, #333333 10.36%, #101010 60.9%)",
                            transition: transitionSpring,
                        },
                    }}
                    onAnimationComplete={() => {
                        if (animationName === "firstAnimation") {
                            setAnimationName("secondAnimation")
                        }
                        if (animationName === "secondAnimation") {
                            // setIsAnimationComplete(true)
                        }
                    }}
                >
                    <BackgroundLines className="absolute w-full h-full hero-mask">
                        <></>
                    </BackgroundLines>
                    {/* ENLIGHTENED BALL*/}
                    <motion.div
                        className="absolute top-1/2 left-1/2 w-7 h-7"
                        style={{
                            boxShadow: "0px 0px 64px 64px rgba(255, 255, 255, 0.25)",
                            filter: "blur(8px)"
                        }}
                        initial={{
                            backgroundColor: "rgba(255,255,255,0)",
                            x: "-50%",
                            y: "-50%",
                            display: "none"
                        }}
                        animate={animationName}
                        variants={{
                            firstAnimation: {
                                backgroundColor: "rgba(255,255,255,0.5)",
                                x: "-50%",
                                y: "-50%",
                                display: "none",
                                transition: transitionTween,
                            },
                            secondAnimation: {
                                backgroundColor: "rgba(255,255,255,0.5)",
                                x: "-50%",
                                y: "-50%",
                                display: "block",
                                transition: transitionSpring,
                            },
                        }}
                    >
                    </motion.div>
                    {/* NAME */}
                    <motion.div
                        className="absolute left-1/2 -translate-x-1/2 text-gradient opacity-25"
                        initial={{ top: "0%", opacity: 0 }}
                        animate={animationName}
                        variants={{
                            firstAnimation: {
                                top: "5%",
                                opacity: 0.01,
                                transition: transitionTween,
                            },
                            secondAnimation: {
                                top: "10%",
                                opacity: 1,
                                transition: transitionSpring,
                            },
                        }}
                    >
                        <h1 className="text-[108px] text-center font-bold bg-gradient-to-b from-white3 to-transparent to-65% text-gradient">
                            Vivek G
                        </h1>
                    </motion.div>
                    {/* LEFT BRAIN CONTAINER */}
                    <div className="relative col-span-1">
                        <motion.div
                            className="absolute right-0 top-1/2 cursor-pointer"
                            initial={{ x: -400, y: "-50%", opacity: 0.1 }}
                            animate={animationName}
                            variants={{
                                firstAnimation: {
                                    x: -50,
                                    opacity: 0.9,
                                    transition: transitionTween,
                                },
                                secondAnimation: {
                                    x: 0,
                                    opacity: 1,
                                    transition: transitionSpring,
                                },
                            }}
                            onClick={handleBrainClick}
                        >
                            {/* <LeftBrain isAnimationComplete={isAnimationComplete} /> */}
                            <img src="/images/brain-left.svg" alt="" />
                        </motion.div>
                        <motion.h2
                            className="text-white1 text-right text-[48px] font-normal absolute right-12 top-1/2"
                            initial={{ x: -300, y: "-50%", opacity: 0 }}
                            animate={animationName}
                            variants={{
                                firstAnimation: {
                                    x: -150,
                                    opacity: 0.01,
                                    transition: transitionTween,
                                },
                                secondAnimation: {
                                    x: -25,
                                    opacity: 1,
                                    transition: transitionSpring,
                                },
                            }}
                        >
                            Opinionated <br /> designer
                        </motion.h2>
                    </div>
                    {/* RIGHT BRAIN CONTAINER */}
                    <div className="relative col-span-1">
                        <motion.div
                            className="absolute left-0 top-1/2 cursor-pointer"
                            initial={{ x: 400, y: "-50%", opacity: 0.1 }}
                            animate={animationName}
                            variants={{
                                firstAnimation: {
                                    x: 50,
                                    opacity: 0.9,
                                    transition: transitionTween,
                                },
                                secondAnimation: {
                                    x: 0,
                                    opacity: 1,
                                    transition: transitionSpring,
                                },
                            }}
                            onClick={handleBrainClick}
                        >
                            <img src="/images/brain-right.svg" alt="" />
                            {/* <RightBrain isAnimationComplete={isAnimationComplete} /> */}
                        </motion.div>
                        <motion.h2
                            className="text-white1 text-left text-[48px] font-normal absolute left-12 top-1/2"
                            initial={{ x: 300, y: "-50%", opacity: 0 }}
                            animate={animationName}
                            variants={{
                                firstAnimation: {
                                    x: 150,
                                    opacity: 0.01,
                                    transition: transitionTween,
                                },
                                secondAnimation: {
                                    x: 25,
                                    opacity: 1,
                                    transition: transitionSpring,
                                },
                            }}
                        >
                            Action biased <br /> engineer
                        </motion.h2>
                    </div>
                </motion.div>
            </div>
            {/* TITLE */}
            <motion.div
                key={scale}
                className="-mt-12 flex gap-4 justify-center items-center"
                initial={{ opacity: 0 }}
                animate={animationName}
                variants={{
                    firstAnimation: {
                        opacity: 0,
                        transform: `scale(${scale})`,
                        transition: transitionTween,
                    },
                    secondAnimation: {
                        opacity: 1,
                        transform: `scale(${scale})`,
                        transition: transitionSpring,
                    },
                }}
            >
                {/* Increased dimensions to prevent text being unreadable in mobile */}
                <img src="/icons/briefcase-icon.svg" alt="Briefcase icon" className={`${isLandscape ? `h-auto` : `h-8`}`} />
                <p className={`text-white1 text-center ${isLandscape ? `text-2xl` : `text-4xl`} font-extralight whitespace-nowrap`}>
                    Senior Product Designer at BrowserStack
                </p>
            </motion.div>
        </motion.section>
    )
}