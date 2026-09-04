import React from "react";
import { LuDelete } from "react-icons/lu";

const Wordle=()=>{
    return (

        <div>
            
            
            <div className="ClearSans w-full mx-auto flex flex-col items-center text-white ">
                
                
                <h1 className="text-3xl text-white "> Wordle</h1>
                {/* user input row 1  */}
                <div className="grid grid-cols-5 mt-4">
                    
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                </div>
{/* user input row 2  */}
                <div className="grid grid-cols-5 mt-1">
                    
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                </div>
{/* user input row 3  */}
                <div className="grid grid-cols-5 mt-1">
                    
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                </div>
{/* user input row 4  */}
                <div className="grid grid-cols-5 mt-1">
                    
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                </div>

{/* user input row 5  */}
                <div className="grid grid-cols-5 mt-1">
                    
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                    <input className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl " disabled></input>
                </div>
            </div>
{/* jum flark lol ;)   */}
            <div className="grid grid-cols-1 mt-4 mb-10 " hid>
                <div className="mx-auto grid grid-cols-8  ">
                    
                    <input className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-green-600 border-none m-1 text-4xl placeholder:text-white" placeholder="J" disabled />
                    <input className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-green-600 border-none m-1 text-4xl placeholder:text-white" placeholder="U" disabled />
                    <input className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-green-600 border-none m-1 text-4xl placeholder:text-white" placeholder="M" disabled></input>
                    <input className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-green-600 border-none m-1 text-4xl placeholder:text-white" placeholder="F" disabled></input>
                    <input className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-green-600 border-none m-1 text-4xl placeholder:text-white" placeholder="L" disabled></input>
                    <input className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-green-600 border-none m-1 text-4xl placeholder:text-white" placeholder="A" disabled></input>
                    <input className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-green-600 border-none m-1 text-4xl placeholder:text-white" placeholder="R" disabled></input>
                    <input className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-green-600 border-none m-1 text-4xl placeholder:text-white" placeholder="K" disabled></input>
                </div>

            </div>

            <div className="grid grid-cols-1 mt-4 mb-10 text-white" >
                <div className="mx-auto grid grid-cols-10  ">
                    
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >Q</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >W</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >E</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >R</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >T</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >Y</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >U</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >I</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >O</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >P</button>
                </div>
                <div className="mx-auto grid grid-cols-8  ">
                    
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >A</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >S</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >D</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >F</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >G</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >H</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >K</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >L</button>
                </div>

                <div className="mx-auto grid grid-cols-11  ">
                    <button className="col-span-2 ClearSans text-center w-28 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-1xl" >ENTER</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >Z</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >X</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >C</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >V</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >B</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >N</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" >M</button>
                    <button className="col-span-2 ClearSans flex items-center justify-center w-28 h-14 bg-inherit border-2 bg-gray-500 border-none rounded-md m-1 text-4xl" ><LuDelete /></button>
                </div>

            </div>

            
        </div>
    )
}
export default Wordle