import { useState } from "react";

function Counter(){

    const [currentNumber,setCurrentNumber]=useState(0);

    return(
        <div className="flex flex-col justify-center items-center gap-10">
            <div className="bg-white flex justify-center items-center w-fit pt-3 pb-3 gap-12">
                <button onClick={()=>setCurrentNumber(currentNumber-1)} className="text-5xl border-r-2 w-20 border-[#bfbfbf] text-[#344151]">-</button>
                <h2 className="text-5xl text-[#344151] font-bold">{currentNumber}</h2>
                <button onClick={()=>setCurrentNumber(currentNumber+1)} className="text-5xl border-l-2 w-20 border-[#bfbfbf] text-[#344151]">+</button>
            </div>
            <button onClick={()=>setCurrentNumber(0)} className="bg-[#0398D4] text-white px-5 py-2 rounded-sm text-lg">Reset</button>
        </div>
    )
}

export default Counter;