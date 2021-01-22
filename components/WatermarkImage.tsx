interface WaterMarkImageProps {
    onClick: Function
    src: String
    title: String
    children?: String,
}

const WatermarkImage = (
    { title, onClick, src, children }: WaterMarkImageProps
) => {
    const containerStyle = {
        height: "calc(100% - 3rem)",
        backgroundImage: `url(${src})`,
    }

    return (
        <div className="relative bg-center bg-cover"
            style={containerStyle}
        >
            <div className="absolute top-0 left-0 flex flex-col items-center justify-center w-full h-full text-white bg-black bg-opacity-50">
                <h1 className="text-5xl text-center align-middle">{title}</h1>
                <p className="px-20 m-10">{children}</p>
                <button
                    type="button"
                    className="inline-block px-6 py-2 text-xs leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded ripple hover:bg-green-500 hover:text-white focus:outline-none waves-effect"
                    onClick={() => onClick()}
                >Apply</button>
            </div>
        </div>
    )
}

export default WatermarkImage