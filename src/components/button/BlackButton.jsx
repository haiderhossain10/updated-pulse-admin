import React from "react";

export default function BlackButton({ children }) {
    return (
        <>
            <button className="bg-black h-[50px] px-6 text-white rounded-lg hover:bg-slate-900 duration-150">
                {children}
            </button>
        </>
    );
}
