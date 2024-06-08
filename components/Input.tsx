import React from "react";

interface InputProps {
    id: string,
    onChange: any;
    value: string,
    type?: string,
    label: string
}

const Input: React.FC<InputProps> = ({
    id,
    type,
    label, 
    onChange, 
    value
}) => {
    return (
        <div className="relative">
            <input
                id={id}
                onChange={onChange}
                type={type}
                className="
                    block
                    rounded-sm
                    px-6
                    pt-6
                    pb-1
                    w-full
                    text-md
                    text-white
                    bg-neutral-700
                    appearence-none
                    focus:outline-none
                    focus:ring-0
                    peer
                "
                placeholder=" "
                value={value}
            />
            <label 
                className="
                    absolute
                    text-md
                    text-zinc-400
                    duration-150
                    transform
                    -translate-y-3
                    scale-75
                    top-4
                    left-6
                    origin-[0]
                    z-10
                    peer-placeholder-shown:scale-100
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-3
                "
                htmlFor={id}>
                {label}
            </label>
        </div>
    )
}

export default Input;