function Button(props) {
    if (props.type == "primary")
        return (
            <button className="px-4 py-2 bg-primary-700 hover:bg-primary-600 text-white rounded-lg shadow-lg flex items-center font-bold transition-all ease-in-out duration-300">
                {props.children}
            </button>
        )

    else if (props.type == "secondary")
        return (
            <button className="px-4 py-2 bg-primary-50 hover:bg-primary-100/50 text-primary-700 rounded-lg shadow-lg flex items-center font-bold transition-all ease-in-out duration-300">
                {props.children}
            </button>
        )

    else if (props.type == "tertiary")
        return (
            <button className="text-primary-700 flex items-center font-bold transition-all ease-in-out duration-300">
                {props.children}
            </button>
        )
}

export default Button;