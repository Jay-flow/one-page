import Button from "../components/Button"

interface WaterMarkImageProps {
    src: String
    title: String
    children?: JSX.Element | JSX.Element[]
    style?: object
    className?: String
}

const WatermarkImage = (
    { title, src, children, style, className }: WaterMarkImageProps
) => {

    const containerStyle = style == null ? {
        backgroundImage: `url(${src})`,
    } : {
            ...style,
            backgroundImage: `url(${src})`,
        }

    return (
        <div className={`relative bg-center bg-cover ${className}`}
            style={containerStyle}
        >
            <div className="absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-center w-full h-full space-y-6">
                    <h1 className="text-5xl text-center align-middle">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WatermarkImage