import Button from '../components/Button'

interface PictureDescriptionProps {
    src: string
    title: string
    children?: string
    onClick?: () => void
    pictureLocation?: 'left' | 'right'
    className?: string
}

const PictureDescription = ({
    onClick,
    pictureLocation,
    src,
    children,
    title,
    className
}: PictureDescriptionProps): JSX.Element => {
    let flexDeriction = 'md:flex-row'
    if (pictureLocation == 'right') {
        flexDeriction = 'md:flex-row-reverse'
    }
    let spaceContent = 'md:mr-6'
    if (pictureLocation == 'right') {
        spaceContent = 'md:ml-6'
    }
    return (
        <div className={`flex flex-col items-center h-full ${flexDeriction} ${className}`}>
            <div className={`flex-shrink-0 w-full mb-6 md:w-1/3 h-60 md:mb-0 ${spaceContent}`}>
                <div
                    className="h-full bg-center bg-no-repeat bg-cover rounded-md"
                    style={{
                        backgroundImage: `url(${src})`
                    }}></div>
            </div>
            <div className="flex flex-col">
                <div className="mb-6">
                    <h1 className="text-2xl font-medium text-green-900">{title}</h1>
                    <p>{children}</p>
                </div>
                {onClick != null ? (
                    <div className="self-end">
                        <Button onClick={() => onClick()}>Submit</Button>
                    </div>
                ) : null}
            </div>
        </div>
    )
}

export default PictureDescription
