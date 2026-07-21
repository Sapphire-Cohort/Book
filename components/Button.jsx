

const Button = ({ className, label }) => {
    return (
        <button className={`${className} py-2 px-4 rounded`}>
            {label}
        </button>
    )
}
export default Button