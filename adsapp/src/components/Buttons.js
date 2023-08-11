import React from "react";


const Button = ({ placeholder, onClick }) => {
    return (
        <div onClick={onClick} className={`bg-[#A259FF] px-4 py-2 text-center rounded-[15px] cursor-pointer hover:bg-[#B25FFF]`} >
            <span>{placeholder}</span>
        </div>
    )
}


export {
    Button
}