interface SectionProps {
    title: string
    children?: JSX.Element | JSX.Element[]
    className?: string
}

const Section = ({ title, children, className }: SectionProps) => {
    return (
        <section className={className}>
            <div className="container mx-auto">
                <div>
                    <h1 className="mb-2 text-2xl font-black">{title}</h1>
                </div>
                <div className="space-y-4 lg:space-y-0 lg:space-x-4 lg:flex">
                    {children}
                </div>
            </div>
        </section>
    )
}

export default Section