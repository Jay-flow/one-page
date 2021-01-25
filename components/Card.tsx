import { Children } from "react"

interface CardProps {
    src: string
    title: String
    children?: String
}

const Card = (
    { src, title, children }: CardProps
) => {
    return (
        <div className="bg-white shadow-xl">
            <div>
                <img src={src} alt=""
                    className="object-cover w-full h-56 border-white" />
            </div>
            <div className="px-4 py-4 md:px-10">
                <h1 className="text-lg font-bold">
                    {title}
                  </h1>
                <p className="py-4">{children}</p>
            </div>
        </div>
    )
}

export default Card