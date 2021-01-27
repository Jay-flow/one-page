interface WaterMarkImageProps {
    src: string
    title: string
    children?: JSX.Element | JSX.Element[]
    style?: React.CSSProperties
    className?: string
}

const WatermarkImage = ({
    title,
    src,
    children,
    style,
    className
}: WaterMarkImageProps): JSX.Element => {
    const containerStyle =
        style == null
            ? {
                  backgroundImage: `url(${src})`
              }
            : {
                  ...style,
                  backgroundImage: `url(${src})`
              }

    return (
        <div className={`relative bg-center bg-cover ${className}`} style={containerStyle}>
            <div className="absolute top-0 left-0 w-full h-full text-white bg-black bg-opacity-50">
                <div className="flex flex-col items-center justify-center w-full h-full space-y-6 p-6">
                    <h1 className="text-5xl text-center align-middle">{title}</h1>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default WatermarkImage
