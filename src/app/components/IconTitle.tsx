export default function IconTitle({
    icon,
    title,
    className = ""
}: {
    icon: React.ReactNode,
    title: string
    className?: string
}) {
    return (
        <div className={`${className} flex flex-row gap-x-2 text-xl`}>
            {icon}
            <h1>{title}</h1>
        </div>
    )
}