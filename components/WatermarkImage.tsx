import Button from "../components/Button"

interface WaterMarkImageProps {
    onClick?: Function
    src: String
    title: String
    children?: String
    style?: object
    className?: String
}

const WatermarkImage = (
    { title, onClick, src, children, style, className }: WaterMarkImageProps
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
                    <p className="px-6 overflow-hidden md:px-40">{children}</p>
                    {onClick != null ? <Button
                        onClick={() => onClick()}
                    >Apply</Button> : null
                    }
                </div>
            </div>
        </div>
    )
}

export default WatermarkImage