"use client"

import { useGlobalStore } from "@/stores/GlobalStore"
import { cn } from "@/lib/utils"
import { Lora } from "next/font/google"
import React, { useEffect, useState } from "react"

const lora = Lora({
    subsets: ["latin"],
    style: "italic"
})

export const TestimonialCard = ({
    items,
    direction = "left",
    speed = "fast",
    pauseOnHover = true,
    className,
}: {
    items: {
        quote: string
        name: string
        title: string
    }[]
    direction?: "left" | "right"
    speed?: "fast" | "normal" | "slow"
    pauseOnHover?: boolean
    className?: string
}) => {
    const containerRef = React.useRef<HTMLDivElement>(null)
    const scrollerRef = React.useRef<HTMLUListElement>(null)
    const [start, setStart] = useState(false)
    const isTouchDevice = useGlobalStore(state => state.isTouchDevice)

    useEffect(() => {
        if (isTouchDevice) {
            setStart(false)
            removeClonedElements()
        }
        else {
            setStart(true)
            cloneElements()
            getDirection()
            getSpeed()
            setStart(true)
        }
    }, [isTouchDevice])


    // TODO: Understand why this creates 4 duplicates of each item
    function cloneElements() {
        if (containerRef.current && scrollerRef.current) {
            const scrollerContent = Array.from(scrollerRef.current.children)

            scrollerContent.forEach((item) => {
                const duplicatedItem = item.cloneNode(true)
                if (scrollerRef.current) {
                    scrollerRef.current.appendChild(duplicatedItem)
                }
            })
        }
    }

    function removeClonedElements() {
        if (scrollerRef.current?.children) {
            while (scrollerRef.current?.children.length > items.length) {
                const lastElement = scrollerRef.current?.lastChild
                if (lastElement) {
                    scrollerRef.current?.removeChild(lastElement)
                }
            }
        }
    }
    const getDirection = () => {
        if (containerRef.current) {
            if (direction === "left") {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "forwards"
                )
            } else {
                containerRef.current.style.setProperty(
                    "--animation-direction",
                    "reverse"
                )
            }
        }
    }
    const getSpeed = () => {
        if (containerRef.current) {
            if (speed === "fast") {
                containerRef.current.style.setProperty("--animation-duration", "20s")
            } else if (speed === "normal") {
                containerRef.current.style.setProperty("--animation-duration", "40s")
            } else {
                containerRef.current.style.setProperty("--animation-duration", "80s")
            }
        }
    }
    return (
        <div
            ref={containerRef}
            className={cn(
                `scroller relative z-20 max-w-full ${isTouchDevice ? `px-6 overflow-auto` : `overflow-hidden [mask-image:linear-gradient(to_right,transparent,white_10%,white_90%,transparent)]`}`,
                className
            )}
        >
            <ul
                ref={scrollerRef}
                className={cn(
                    "flex min-w-full shrink-0 gap-4 py-4 w-max flex-nowrap",
                    start && "animate-scroll",
                    pauseOnHover && "hover:[animation-play-state:paused]"
                )}
            >
                {items.map((item) => (
                    <li
                        className="w-[80vw] md:w-[40vw] h-fit relative border border-white/25 bg-gradient-to-t from-purple1/25 to-black1 text-white2 rounded-xl flex-shrink-0 p-9 shadow-whiteGlow1 bg-center bg-cover"
                        key={item.name}
                    >
                        <p
                            className={`${lora.className} absolute right-6 -top-[36px] md:-top-[52px] -scale-x-100 -scale-y-100 text-5xl md:text-7xl italic -mb-4 text-orange1`}
                        >
                            “
                        </p>
                        <div className="mb-8 text-white2 font-light">
                            <p>
                                {item.quote}
                            </p>
                        </div>
                        <div className="text-white1">
                            <p className="">
                                {item.name}
                            </p>
                            <p className="">
                                {item.title}
                            </p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}
