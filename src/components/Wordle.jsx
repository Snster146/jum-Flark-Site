import React from "react";
import { useState } from "react";
import { LuDelete } from "react-icons/lu";
import checkWord from "../js/wordle.js"

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
    const [rowCell,setRowCell]=useState(0)
    const [colCell,setCollCell]=useState(0)
    
    function addLetter(letter){
        if (colCell<5){
            const cell =document.getElementById(`cell-${rowCell}-${colCell}`)
        if (cell){
            cell.textContent=letter;
            setCollCell(colCell+1);
                }
            }
        
    }        

    function handleEnter(){
        if (colCell==5){
            let currWord="";
            for (let i=0;i<5; i++ ){
                currWord=currWord+document.getElementById(`cell-${rowCell}-${i}`).textContent;
            }
            checkWord(currWord,rowCell);


            setRowCell(rowCell+1);
            setCollCell(0);
            

        }

    }
    function handleDelete(){
        if (colCell>0){
            const cell =document.getElementById(`cell-${rowCell}-${colCell-1}`);
            if (cell){
                cell.textContent='';
                setCollCell(colCell-1);
            }
        }
    }


    return (

        <div className="text-[#AD7952]">
            
            
            <div className="ClearSans w-full mx-auto flex flex-col items-center  ">
                
               
                <h1 className="text-3xl  text-[#AD7952]"> Wordle</h1>
                {/* dynamically create the cell rows  */}
                {createCells(5)}


                <div className="mx-auto grid grid-cols-10  ">

                    <button onClick={() => addLetter('Q')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Q</button>
                    <button onClick={() => addLetter('W')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >W</button>
                    <button onClick={() => addLetter('E')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >E</button>
                    <button onClick={() => addLetter('R')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >R</button>
                    <button onClick={() => addLetter('T')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >T</button>
                    <button onClick={() => addLetter('Y')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Y</button>
                    <button onClick={() => addLetter('U')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >U</button>
                    <button onClick={() => addLetter('I')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >I</button>
                    <button onClick={() => addLetter('O')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >O</button>
                    <button onClick={() => addLetter('P')}  className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >P</button>
                </div>
                <div className="mx-auto grid grid-cols-9  ">

                    <button onClick={() => addLetter('A')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >A</button>
                    <button onClick={() => addLetter('S')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >S</button>
                    <button onClick={() => addLetter('D')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >D</button>
                    <button onClick={() => addLetter('F')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >F</button>
                    <button onClick={() => addLetter('G')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >G</button>
                    <button onClick={() => addLetter('H')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >H</button>
                    <button onClick={() => addLetter('J')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >J</button>

                    <button onClick={() => addLetter('K')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >K</button>
                    <button onClick={() => addLetter('L')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >L</button>
                </div>

                <div className="mx-auto grid grid-cols-11  ">
                    <button onClick={()=>handleEnter()} className="col-span-2 ClearSans text-center w-28 h-14 bg-inherit  border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-1xl" >ENTER</button>
                    <button onClick={() => addLetter('Z')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Z</button>
                    <button onClick={() => addLetter('X')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >X</button>
                    <button onClick={() => addLetter('C')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >C</button>
                    <button onClick={() => addLetter('V')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >V</button>
                    <button onClick={() => addLetter('B')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >B</button>
                    <button onClick={() => addLetter('N')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >N</button>
                    <button onClick={() => addLetter('M')} className="ClearSans text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >M</button>
                    <button onClick={()=>handleDelete()} className="col-span-2 ClearSans flex items-center justify-center w-28 h-14 bg-inherit border-gray-500 border-2 bg-gray-500 rounded-md m-1 text-4xl" ><LuDelete /></button>
                </div>                

            </div>

            
        </div>
    )
}
export default Wordle