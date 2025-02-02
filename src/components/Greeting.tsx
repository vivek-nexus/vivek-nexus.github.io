import { motion } from "motion/react"
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export function Greeting({ userIp }: { userIp: string }) {
    return (
        <motion.section
            className="mx-4 w-dvh h-dvh text-center bg-backgroundGrid bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center"
            initial={{ opacity: 0 }}
            animate={{
                opacity: 100,
                transition: {
                    duration: 1,
                    ease: "easeIn"
                }
            }}
            exit={{
                opacity: 0,
                transition: {
                    duration: 1,
                    ease: "easeOut"
                }
            }}
        >
            <p className="mb-4 text-sm md:text-2xl">
                Hello human at&nbsp;
                <TooltipProvider>
                    <Tooltip delayDuration={100}>
                        <TooltipTrigger asChild>
                            <button className="font-bold bg-gradient-to-r from-primaryGreen to-primaryBlue text-gradient">{userIp}!</button>
                        </TooltipTrigger>
                        <TooltipContent>
                            <p className="max-w-[25vw]">That&apos;s your public IP address!</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            </p>
            <h2 className="text-2xl md:text-5xl font-extralight mb-9 bg-gradient-to-b from-white to-white3 text-gradient">
                Welcome to my corner on the internet!
            </h2>
        </motion.section >
    )
}