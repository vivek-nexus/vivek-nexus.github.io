import { randomThoughts } from "@/constants/randomThougts"
import { useGlobalStore } from "@/stores/GlobalStore"

export function RandomThought() {
    const tooltipInvokedCount = useGlobalStore(state => state.tooltipInvokedCount)
    return (
        <p className="max-w-[25vw] leading-normal" >
            {randomThoughts[(tooltipInvokedCount % 4)]}
        </p>)
}