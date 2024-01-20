export default function Paragraph({ children }: { children: React.ReactNode }) {
    return (
        <p className="text-zinc-800 text-justify py-4">
            {children}
        </p>
    )
}