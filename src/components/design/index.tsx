import { designProjects } from "@/constants/designProjects"
import { DesignProjectCard } from "./DesignProjectCard"
import { DesignValues } from "./DesignValues"
import { motion } from "motion/react"
import { useInView } from "react-intersection-observer"
import { useEffect } from "react"
import { useGlobalStore } from "@/stores/GlobalStore"


export function Design() {
    const { ref, inView } = useInView({ threshold: 0.25 })
    const setActiveSection = useGlobalStore(state => state.setActiveSection)

    useEffect(() => {
        if (inView) {
            setActiveSection("D")
        }
    }, [inView])

    return (
        <section ref={ref} id="design" className="max-w-[1024px] mx-auto px-6 md:px-4 pb-12 md:pb-12">
            <DesignValues />
            <motion.div
                className="flex flex-col gap-8 mb-6"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
            >
                {designProjects.map((designProject) => {
                    return (
                        <DesignProjectCard
                            key={designProject.title}
                            gradientColourHex={designProject.gradientColourHex}
                            gradientStartOpacity={designProject.gradientStartOpacity}
                            title={designProject.title}
                            description={designProject.description}
                            skills={designProject.skills}
                            quote={designProject.quote}
                            linkText={designProject.linkText}
                            hyperLink={designProject.hyperLink}
                            buttonGradientEndOpacity={designProject.buttonGradientEndOpacity}
                            imageURI={designProject.imageURI}
                            addMask={designProject.addMask}
                        />
                    )
                })}
            </motion.div>
            <a
                href="https://vivek-nexus.medium.com"
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
        </section>
    )
}