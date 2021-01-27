interface SectionProps {
    children?: JSX.Element | JSX.Element[]
    className?: string
}

const Section = ({ children, className }: SectionProps): JSX.Element => {
    return (
        <section className={className}>
            <div className="container mx-auto">{children}</div>
        </section>
    )
}

export default Section
