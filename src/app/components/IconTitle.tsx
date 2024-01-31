import AnimatedWord from "./AnimatedWord"

export default function IconTitle({
    icon,
    title,
    className = "",
    animated = false
}: {
    icon: React.ReactNode,
    title: string
    className?: string
    animated?: boolean
}) {
    return (
        <div className={`${className} flex flex-row gap-x-2 text-xl`}>
            {animated ? <AnimatedWord>{icon}</AnimatedWord> : icon}
            <h1>{animated ? <AnimatedWord>{title}</AnimatedWord> : title}</h1>
        </div>
    )
}