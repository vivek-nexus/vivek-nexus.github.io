import { Stat } from "./Stat"

export interface StatProps {
    name: string,
    value: string,
    iconURI: string
}

interface EngineeringProjectCardProps {
    index: number
    title: string
    description: string
    repoLink: string
    stats: StatProps[]
    linkText: string
    hyperLink: string
}

export function EngineeringProjectCard(
    {
        index,
        title,
        description,
        repoLink,
        stats,
        linkText,
        hyperLink,
    }: EngineeringProjectCardProps
) {
    return (
        <div
            className={`relative ${index === 0 ? `col-span-2` : `col-span-2 md:col-span-1`} p-6 md:p-9`}
            style={{
                // https://kovart.github.io/dashed-border-generator/
                backgroundImage: `url("data:image/svg+xml,%3csvg width='100%25' height='100%25' xmlns='http://www.w3.org/2000/svg'%3e%3crect width='100%25' height='100%25' fill='none' stroke='%23666666FF' stroke-width='4' stroke-dasharray='6%2c12' stroke-dashoffset='0' stroke-linecap='square'/%3e%3c/svg%3e")`
            }}
        >
            <img src="/icons/plus.svg" alt="" className="absolute -top-[11px] -left-[11px]" />
            <img src="/icons/plus.svg" alt="" className="absolute -top-[11px] -right-[11px]" />
            <img src="/icons/plus.svg" alt="" className="absolute -bottom-[11px] -left-[11px]" />
            <img src="/icons/plus.svg" alt="" className="absolute -bottom-[11px] -right-[11px]" />
            <div className="flex justify-between items-center mb-4">
                <p className="text-2xl md:text-4xl">{title}</p>
                <a href={repoLink} target="_blank">
                    <img src="/icons/github.svg" alt="GitHub icon" className="h-8 md:h-12 opacity-75" />
                </a>
            </div>
            <hr className="border-white3 mb-4" />
            <p className="mb-12">{description}</p>
            <div className={`grid ${index === 0 ? `grid-cols-2 md:grid-cols-4` : `grid-cols-2`} gap-8 justify-between mb-12`}>
                {
                    stats.map((stat, index) => {
                        return (
                            <Stat
                                key={stat.name}
                                index={index}
                                name={stat.name}
                                value={stat.value}
                                iconURI={stat.iconURI}
                            />
                        )
                    })
                }
            </div>
            <a
                href={hyperLink}
                target="_blank"
                className="w-fit p-4 border border-white1 flex gap-1 items-center group"
            >
                {linkText}
                <img
                    src="/icons/north-east-arrow.svg"
                    alt="North east arrow icon indicating that the link opens in a new tab"
                    className="h-4 group-hover:translate-x-1 group-hover:-translate-y-1 duration-300 ease-in-out"
                />
            </a>
        </div>
    )
}