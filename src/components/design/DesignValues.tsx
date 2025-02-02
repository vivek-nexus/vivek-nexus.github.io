import { DesignValueCard } from "./DesignValueCard"
import { motion } from "motion/react"

export function DesignValues() {
    return (
        <motion.div
            className="mb-16 md:mb-36 flex flex-col-reverse lg:flex-col gap-4 md:gap-8 lg:gap-16"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, type: "tween", ease: "easeIn" }}
        >

            <div className="flex flex-row flex-wrap lg:flex-row gap-4 md:gap-8 lg:gap-32 justify-center items-center">
                <DesignValueCard
                    number={1}
                    className="flex-shrink-0"
                />
                <DesignValueCard
                    number={2}
                    className="flex-shrink-0"
                />
            </div>
            <div className="flex flex-row flex-wrap lg:flex-row gap-4 md:gap-8 lg:gap-32 justify-center items-center">
                <DesignValueCard
                    number={3}
                    className="flex-shrink-0 order-2 lg:order-1"
                />
                <div className="relative basis-full lg:basis-auto order-1 lg:order-2">
                    <div className="absolute left-1/2 -translate-x-1/2 mx-auto mt-20 w-[50%] lg:w-[125%] h-8 bg-primaryBlue/50 blur-[24px]" style={{ borderRadius: "100px/25px" }}>
                    </div>
                    <h2
                        className="font-extrabold text-5xl lg:text-7xl text-black text-center pb-2 bg-gradient-to-b from-primaryGreen from-30% to-primaryBlue"
                        style={{
                            WebkitBackgroundClip: "text",
                            WebkitTextStroke: "4px transparent",
                            textShadow: "0px 0px 36px var(--primary-blue)"
                        }}
                    >
                        Design
                    </h2>
                </div>
                <DesignValueCard
                    number={4}
                    className="flex-shrink-0 order-3"
                />
            </div>
        </motion.div>
    )
}