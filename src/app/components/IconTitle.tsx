export default function IconTitle({
    icon,
    title
}: {
    icon: React.ReactNode,
    title: string
}) {
    return (
        <div className="flex flex-row gap-x-2 text-lg">
            {icon}
            <h1>{title}</h1>
        </div>
    )
}