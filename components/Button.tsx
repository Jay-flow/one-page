interface ButtonProps {
    onClick: () => void
    className?: string
    children?: string
}

const Button = ({ onClick, children, className }: ButtonProps): JSX.Element => {
    return (
        <button
            type="button"
            className={`inline-block px-6 py-2 text-xs leading-6 text-center text-green-500 uppercase transition bg-transparent border-2 border-green-500 rounded ripple hover:bg-green-500 hover:text-white focus:outline-none waves-effect ${className}`}
            onClick={() => onClick()}>
            {children}
        </button>
    )
}

export default Button
