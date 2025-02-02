import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"
import { RandomThought } from "./RandomThought"
import { useState } from "react"
import { useGlobalStore } from "@/stores/GlobalStore"



export function AboutText({ number }: { number: number }) {
    const [isTooltipOpen, setIsTooltipOpen] = useState(false)
    const setTooltipInvokedCount = useGlobalStore(state => state.setTooltipInvokedCount)

    return (
        <p className="text-white1">
            {(number === 1) && `Two core aspects of my professional life — design and frontend — I learnt them outside the formal education framework! Most skills are ultimately a combination of experience and persistence, yeah? Purpose and process are both important, but if given a choice, I might show a healthy disrespect for the process.`}
            {(number === 2) && `Stoicism is one value I hold close to heart and decent self awareness is a positive side effect of this! `}
            {(number === 3) &&
                <>
                    Whenever I day dream, my brain has this weird habit of zooming out and finding similarities between seemingly unrelated things of life.
                    <span className="hidden md:inline"> A&nbsp;
                        <TooltipProvider>
                            <Tooltip
                                delayDuration={100}
                                open={isTooltipOpen}
                                onOpenChange={() => {
                                    if (!isTooltipOpen) {
                                        setTooltipInvokedCount((tooltipInvokedCount) => (tooltipInvokedCount + 1))
                                    }
                                    setIsTooltipOpen((isTooltipOpen) => !isTooltipOpen)
                                }}
                            >
                                <TooltipTrigger asChild>
                                    <button
                                        className="font-bold bg-gradient-to-r from-primaryGreen to-primaryBlue text-gradient"
                                    >
                                        random example.
                                    </button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <RandomThought />
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                    </span>
                </>
            }
            {(number === 4) && `If you sufficiently broaden your perspective, we are neither making the world a better place nor a worse one — all we are doing is just changing it.`}
        </p>
    )
}