import React from "react"

const Button = ({ children, handleClick, page, setShowPage }) => {  // button component || handleClick is the varible name[number,boolean,string,array,object,functions]

    //{ children, handleClick } these are the props of button component

    const handleClicks = () => {
        handleClick((count) => count + 1)
        setShowPage(page)
    }

    return (
        <button onClick={handleClicks} >
            {children}
        </button>
    )
}

export default Button