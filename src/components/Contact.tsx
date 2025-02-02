import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from "@/components/ui/tooltip"


export function Contact() {
    return (
        <>
            <section
                id="contact"
                className="animated-mesh-gradient px-6 pt-24 pb-8 text-white1 text-center"
            >
                <h2 className="text-5xl md:text-7xl font-extralight mb-12">What say?</h2>
                <div className="mb-12 flex gap-4 md:gap-8 justify-center items-center opacity-75">
                    <a href="mailto:in.vivek.g@gmail.com">
                        <img src="/icons/email.svg" alt="Email icon" className="h-12 md:h-16" />
                    </a>
                    <a href="https://github.com/vivek-nexus" target="_blank">
                        <img src="/icons/github.svg" alt="GitHub icon" className="h-12 md:h-16" />
                    </a>
                    <a href="https://www.linkedin.com/in/vivek-nexus" target="_blank">
                        <img src="/icons/linkedin.svg" alt="Linkedin icon" className="h-12 md:h-16" />
                    </a>
                </div>
                <footer>
                    <p className="text-sm md:text-base">
                        Hand built with Next.js + Tailwind CSS and animated with Motion. Contains&nbsp;
                        <TooltipProvider>
                            <Tooltip delayDuration={100}>
                                <TooltipTrigger asChild>
                                    <button className="md:font-bold">easter eggs</button>
                                </TooltipTrigger>
                                <TooltipContent>
                                    <p className="leading-normal max-w-[25vw]">Two reside inside the mind and the other three in a tooltip like this </p>
                                </TooltipContent>
                            </Tooltip>
                        </TooltipProvider>
                        <span className="md:hidden font-extralight">&nbsp;(clues in the desktop version)</span>
                        .
                    </p>
                </footer>
            </section>
        </>
    )
}