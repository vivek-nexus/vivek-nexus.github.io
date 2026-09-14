export function Skill({ skill, gradientStartHex }: { skill: string, gradientStartHex: string }) {
    return (
        <p
            className="text-gradient bg-linear-to-b"
            style={{ backgroundImage: `linear-gradient(180deg, var(--white-1) 0%, #${gradientStartHex} 100%)` }}
        >
            {skill}
        </p>
    )
}