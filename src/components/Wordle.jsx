import React from "react";
import { useState } from "react";
import { LuDelete } from "react-icons/lu";
import WordleCells from "../js/wordle.js"

function createCells(i){
    return (
        <div className="">
            {Array.from({ length: i }, (_, row) => (
                <div key={row} className="grid grid-cols-5 mt-4">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div key={index} id={`cell-${row}-${index}`} className="w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl"/>
                    ))}
                </div>
            ))}
        </div>
    )
}

const Wordle=()=>{

    
    function alertLetter(letter){
        
        return;
    }        


    return (

        <div className="text-[#AD7952]">
            
            
            <div className="ClearSans w-full mx-auto flex flex-col items-center  ">
                
               
                <h1 className="text-3xl  text-[#AD7952]"> Wordle</h1>
                {/* dynamically create the cell rows  */}
                {createCells(5)}


                <div className="mx-auto grid grid-cols-10  ">

                    <button onClick={() => alertLetter('Q')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Q</button>
                    <button onClick={() => alertLetter('W')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >W</button>
                    <button onClick={() => alertLetter('E')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >E</button>
                    <button onClick={() => alertLetter('R')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >R</button>
                    <button onClick={() => alertLetter('T')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >T</button>
                    <button onClick={() => alertLetter('Y')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Y</button>
                    <button onClick={() => alertLetter('U')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >U</button>
                    <button onClick={() => alertLetter('I')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >I</button>
                    <button onClick={() => alertLetter('O')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >O</button>
                    <button onClick={() => alertLetter('P')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >P</button>
                </div>
                <div className="mx-auto grid grid-cols-8  ">

                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >A</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >S</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >D</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >F</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >G</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >H</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >K</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >L</button>
                </div>

                <div className="mx-auto grid grid-cols-11  ">
                    <button className="col-span-2 ClearSans text-center w-28 h-14 bg-inherit  border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-1xl" >ENTER</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Z</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >X</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >C</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >V</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >B</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >N</button>
                    <button className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >M</button>
                    <button className="col-span-2 ClearSans flex items-center justify-center w-28 h-14 bg-inherit border-gray-500 border-2 bg-gray-500 rounded-md m-1 text-4xl" ><LuDelete /></button>
                </div>                

            </div>

            
        </div>
    )
}
export default Wordle