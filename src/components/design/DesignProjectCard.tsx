import { Lora } from "next/font/google"
import { Skill } from "./Skill"

const lora = Lora({
    subsets: ["latin"],
    style: "italic"
})

interface DesignProjectCardProps {
    title: string
    description: string
    skills: string[]
    quote?: string
    gradientColourHex: string
    gradientStartOpacity: number
    linkText: string
    hyperLink: string
    buttonGradientEndOpacity: number
    imageURI: string,
    addMask: boolean
}


export function DesignProjectCard(
    { title,
        description,
        skills,
        quote,
        gradientColourHex,
        gradientStartOpacity,
        linkText,
        hyperLink,
        buttonGradientEndOpacity,
        imageURI,
        addMask,
    }: DesignProjectCardProps) {
    return (
        <>
            {/* JSX style because I need media queries as well as a state variable :( */}
            <style jsx>{`
                .design-project-card{
                    background: radial-gradient(100.05% 77.64% at 0.74% 100.32%, #${gradientColourHex + gradientStartOpacity} 14.25%, #${gradientColourHex}00 100%);
                }

                @media only screen and (min-width: 1024px) {
                    .design-project-card{
                        background: radial-gradient(32.05% 77.64% at 0.74% 2.32%, #${gradientColourHex + gradientStartOpacity} 14.25%, #${gradientColourHex}00 100%);
                    }
                }
            `}</style>
            <div
                className="w-full rounded-2xl p-6 md:p-12 grid grid-cols-2 border-2 border-white/25 design-project-card"
            >
                <div
                    className="col-span-2 lg:col-span-1 order-2 lg:order-1">
                    <div className="mb-12 md:mb-16">
                        <p
                            className="font-extralight text-white1 text-2xl md:text-4xl mb-6"
                        >
                            {title}
                        </p>
                        <p className="mb-4">{description} </p>
                        <div className="py-2 flex md:flex-col gap-4 md:gap-2 mb-4 whitespace-nowrap overflow-x-auto">
                            {skills.map((skill) => {
                                return (
                                    <Skill
                                        key={skill}
                                        skill={skill}
                                        gradientStartHex={gradientColourHex}
                                    />)
                            })}
                        </div>
                        {quote &&
                            <p className={`${lora.className} italic text-shimmer`}>
                                {`"${quote}"`}
                            </p>
                        }
                    </div>
                    <a
                        href={hyperLink}
                        target="_blank"
                        className="w-fit px-4 py-2 mb-1 md:mb-0 rounded-lg text-white font-medium flex gap-1 items-center group"
                        style={{
                            backgroundImage: `linear-gradient(180deg,#${gradientColourHex} 0%, #${gradientColourHex + buttonGradientEndOpacity} 100% )`
                        }}
                    >
                        {linkText}
                        <img
                            src="/icons/north-east-arrow.svg"
                            alt="North east arrow icon indicating that the link opens in a new tab"
                            className="h-4 group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 ease-in-out"
                        />
                    </a>
                </div>
                <div
                    className={`col-span-2 lg:col-span-1 aspect-square lg:aspect-auto max-h-48 lg:max-h-full order-1 lg:order-2 flex justify-start lg:justify-end bg-no-repeat bg-contain bg-center lg:bg-right ${addMask ? `mask-radial-gradient` : ``}`}
                    style={{
                        backgroundImage: `url("${imageURI}")`
                    }}
                >
                </div>
            </div>
        </>
    )
}