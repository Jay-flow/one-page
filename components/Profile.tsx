interface ProfileProps {
    src: string
    name: string
    content: string
}

const Profile = ({ src, name, content }: ProfileProps) => {
    return (
        <div className="flex items-center w-full p-2 bg-white border shadow rounded-xl">
            <div className="flex items-center space-x-4">
                <img src={src} className="object-cover w-20 h-20 rounded-full" alt={name} />
            </div>
            <div className="flex-grow p-3">
                <div className="font-semibold text-gray-700">
                    {name}
                </div>
                <div className="text-sm text-gray-500">
                    {content}
              </div>
            </div>
        </div>
    )
}

export default Profile