import { hexToRgba } from "@/lib/utils"
import { DirectionAwareHover } from "../ui/direction-aware-hover"
import { AboutText } from "./AboutText"
import { useInView } from "react-intersection-observer"
import { useGlobalStore } from "@/stores/GlobalStore"
import { useEffect } from "react"

export function About() {
    const { ref, inView } = useInView({ threshold: 0.5 })
    const setActiveSection = useGlobalStore(state => state.setActiveSection)

    useEffect(() => {
        if (inView) {
            setActiveSection("A")
        }
    }, [inView])


    return (
        <section
            ref={ref}
            id="about"
            className="max-w-[1024px] mx-auto px-6 font-extralight py-12 md:py-24 md:pt-12 md:pb-24"
        >
            <h2 className="text-5xl md:text-7xl text-center mb-12">About? Me?</h2>
            <div className="md:hidden">
                <div className="mb-4">
                    <AboutText number={1} />
                </div>
                <div className="mb-4">
                    <AboutText number={2} />
                </div>

                <div className="mb-4">
                    <AboutText number={3} />
                </div>
                <div className="mb-4">
                    <AboutText number={4} />
                </div>
            </div>
            <div className="hidden md:block text-lg lg:text-xl">
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div
                        className="col-span-3 md:col-span-2 h-64 rounded-2xl hover:shadow-whiteGlow2 duration-200 ease-in p-8 bg-gradient-to-tl from-primaryBlue/40 to-primaryBlue/0 border border-white3 flex items-center"
                    >
                        <AboutText number={1} />
                    </div>
                    <div
                        className="relative col-span-3 md:col-span-1 h-64 rounded-2xl text-lg border border-white3">
                        <DirectionAwareHover
                            imageUrl={"/images/about-me-1.webp"}
                            className="photo-vignette"
                        >
                            <p className="p-4 pb-0 font-bold">Petrol station commissioning</p>
                            <p className="p-4 pt-0 font-medium">Sales Officer at HP</p>
                        </DirectionAwareHover>
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6 mb-6">
                    <div
                        className="col-span-3 md:col-span-1 h-64 rounded-2xl hover:shadow-whiteGlow2 duration-200 ease-in p-8 bg-gradient-to-l from-primaryBlue/40 to-primaryBlue/0 border border-white3 flex items-center"
                    >
                        <AboutText number={2} />
                    </div>
                    <div
                        className="col-span-3 md:col-span-1 h-64 rounded-2xl hover:shadow-whiteGlow2 duration-200 ease-in border border-white3 flex justify-center items-center"
                        style={{
                            background: `radial-gradient(${hexToRgba("--primary-green", 0.6)} 25%, ${hexToRgba("--primary-blue", 0.5)})`
                        }}
                    >
                        <img src="/images/face-caricature.svg" alt="Caricature of my face" />
                    </div>
                    <div
                        className="col-span-3 md:col-span-1 h-64 rounded-2xl hover:shadow-whiteGlow2 duration-200 ease-in p-8 bg-gradient-to-r from-primaryBlue/40 to-primaryBlue/0 border border-white3 flex items-center"
                    >
                        <AboutText number={3} />
                    </div>
                </div>
                <div className="grid grid-cols-3 gap-6">
                    <div
                        className="col-span-3 md:col-span-1 h-64 rounded-2xl hover:shadow-whiteGlow2 duration-200 ease-in p-8 bg-gradient-to-bl from-primaryBlue/40 to-primaryBlue/0 border border-white3 flex items-center"
                    >
                        <AboutText number={4} />
                    </div>
                    <div
                        className="relative col-span-3 md:col-span-2 h-64 rounded-2xl text-lg border border-white3"
                    >
                        <DirectionAwareHover
                            imageUrl={"/images/about-me-2.webp"}
                            className="photo-vignette"
                        >
                            <p className="p-4 pb-0 font-bold">UXR on the field</p>
                            <p className="p-4 pt-0 font-medium">Product Designer at Setu</p>
                        </DirectionAwareHover>
                    </div>
                </div>
            </div>
        </section>
    )
}