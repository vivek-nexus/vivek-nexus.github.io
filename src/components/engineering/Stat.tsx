import { StatProps } from "./EngineeringProjectCard"

export function Stat({ name, value, iconURI }: StatProps & { index: number }) {
    return (
        <div
            className="pl-4 border-l border-white3"
        >

            <p className="bg-gradient-to-r from-primaryGreen from-10% to-primaryBlue to-30% text-gradient">{name}</p>
            <div className="flex gap-1 items-center">
                <p className="-mb-[1px]">{value}</p>
                <img
                    src={`/icons/${iconURI}`}
                    alt={`Icon ${iconURI.split('.')[0]}`}
                    className="h-4"
                />
            </div>
        </div>
    )
}