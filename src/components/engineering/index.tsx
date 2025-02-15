import { engineeringProjects } from "@/constants/engineeringProjects"
import { Space_Mono } from "next/font/google"
import { EngineeringProjectCard } from "./EngineeringProjectCard"
import { ShootingStars } from "../ui/shooting-stars"
import { StarsBackground } from "../ui/stars-background"
import { useGlobalStore } from "@/stores/GlobalStore"
import { useEffect } from "react"
import { useInView } from "react-intersection-observer"

const spaceMono = Space_Mono({
    subsets: ["latin"],
    weight: "400"
})

export function Engineering() {
    const { ref, inView } = useInView({ threshold: 0.25 })
    const setActiveSection = useGlobalStore(state => state.setActiveSection)

    useEffect(() => {
        if (inView) {
            setActiveSection("E")
        }
    }, [inView])

    return (
        <section
            ref={ref}
            id="engineering"
            className={`relative ${spaceMono.className} py-36 md:py-48 [mask-image:linear-gradient(to_bottom,transparent,white_10%,white_95%,transparent)]`}
        >
            <ShootingStars
                minDelay={500}
                maxDelay={2500}
                className="-z-50"
            />
            <StarsBackground
                twinkleProbability={1}
                starDensity={0.00055}
                className="-z-50"
            />
            <div className="max-w-[1024px] mx-auto px-6">
                <h2 className="text-5xl md:text-7xl text-center font-extralight mb-12">Engineering</h2>
                <div className="grid grid-cols-2 gap-12 mb-8">
                    {engineeringProjects.map((engineeringProject, index) => {
                        return (
                            <EngineeringProjectCard
                                key={engineeringProject.title}
                                index={index}
                                title={engineeringProject.title}
                                description={engineeringProject.description}
                                repoLink={engineeringProject.repoLink}
                                stats={engineeringProject.stats}
                                linkText={engineeringProject.linkText}
                                hyperLink={engineeringProject.hyperLink}
                            />
                        )
                    })}
                </div>
                <a
                    href="https://github.com/vivek-nexus"
                    target="_blank"
                    className="w-fit mx-auto font-bold flex gap-2 justify-center items-center group"
                >
                    More projects
                    <img
                        src="/icons/north-east-arrow.svg"
                        alt="North east arrow icon indicating that the link opens in a new tab"
                        className="h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 duration-300 ease-in-out"
                    />
                </a>
            </div>
        </section>
    )
}