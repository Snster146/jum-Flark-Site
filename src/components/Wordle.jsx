import React from "react";
import { useState } from "react";
import { LuDelete } from "react-icons/lu";
import {checkWord} from "../js/wordle.js";
    // jumflTyped} from "../js/wordle.js";


let isjum = false
let isjum_real = false

// main html

// dynamically create all cells in wordle

function winnerBox(setSolved){
    return(
        <div id="winnerbox" onClick={() => document.getElementById("winnerbox").style.display="none" } className="  fixed inset-0   flex items-center justify-center text-center text-white    ">
            <div className="  border-2 border-green-500   bg-gray-600 w-64 h-72  ">
                <h1 className="text-xl font-bold  text-white p-5 ">youve won</h1>
                <p className="pb-5">Track your Wordle win percentage and earn badges for big achievements.</p>
                <button  className="pb-5"> Create a free account</button><br></br>
                <a href="" alt="some link" className="  underline ">Already Registered? Log In</a>
            </div>
        </div>
    )
}

function createCells(i) {
    return (
        <div className="">
            {Array.from({ length: i }, (_, row) => (
                <div key={row} id={`row-${row}`} className="grid grid-cols-5 mt-4 l-20">
                    {Array.from({ length: 5 }, (_, index) => (
                        <div key={index} id={`cell-${row}-${index}`} className="w-14 h-14  border-2 border-gray-500 m-1 text-4xl " />
                    ))}
                </div>
            ))}
        </div>
        
    )
}

const Wordle = () => {
    // set the value of what row and column your at 
    const [rowCell, setRowCell] = useState(0)
    const [colCell, setCollCell] = useState(0)
    const [solved , setSolved]=useState(false)

    function addLetter(letter) {

        if (solved){return;}

    // colnum = 5 cuz five columns for 5 words :0
        
        const colnum =  5
        
    
// Allow letters while the guess is within the  five-letter limit,
// or youve typed jumfl.
        if ((colCell < colnum) || (isjum)) {
            // Find the cell at the current row and column.
            const cell = document.getElementById(`cell-${rowCell}-${colCell}`)
            // Update the cell and advance the active column if it exists.
            if (cell) {
                cell.textContent = letter;
                setCollCell(colCell + 1);
            }
        }


    }

    function handleEnter() {
        // make sure 5 words or 8 
        if (colCell == 5  || colCell==8 ) {
            // initialize the word will get looped through and added to 
            let currWord = "";
            for (let i = 0; i < colCell; i++) {
// add each letter in the cell of the current row to the current word
                currWord = currWord + document.getElementById(`cell-${rowCell}-${i}`).textContent;
            }
            // calls function from the javascript file , the function checks if youve typed jumfl, which words are in the word and correct and in correct position
                const checkedWord = checkWord(currWord, rowCell);
                // true if option 3 which checks if the word you inputted was 'JUMFL'
                isjum = checkedWord === 3;
                // true if option 4 which checks if the word you inputted was 'JUMFLARK'
                isjum_real=checkedWord === 4;
                
                // dunno
                if (isjum){}

                if (isjum_real){
                    setSolved(true);
                    // document.appendChild(winnerBox())
                }
                // if (isjum_real){
                //     document.
                // }
                // advances to the next row and resets the column to 0 if you havent inputted 'JUMFL' 
                if (!isjum || (colCell==8 & !isjum_real)){
                setRowCell(rowCell + 1);
                setCollCell(0);
            }
  
                



        }

    }
    function handleDelete() {
        if (colCell > 0) {
            const cell = document.getElementById(`cell-${rowCell}-${colCell - 1}`);
            if (cell) {
                cell.textContent = '';
                setCollCell(colCell - 1);
            }
        }
    }


    return (

        <div className="text-[#AD7952]">


            <div className="Wordle w-full mx-auto flex flex-col items-center  ">


                <h1 className="text-3xl  text-[#AD7952]"> Wordle</h1>
                {/* dynamically create the cell rows  */}
                {createCells(5)}
{/* adding all the letters for the keyboard --- could make this more dynamic - they call a function when clicked */}

                <div className="mx-auto grid grid-cols-10  ">

                    <button onClick={() => addLetter('Q')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Q</button>
                    <button onClick={() => addLetter('W')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >W</button>
                    <button onClick={() => addLetter('E')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >E</button>
                    <button onClick={() => addLetter('R')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >R</button>
                    <button onClick={() => addLetter('T')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >T</button>
                    <button onClick={() => addLetter('Y')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Y</button>
                    <button onClick={() => addLetter('U')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >U</button>
                    <button onClick={() => addLetter('I')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >I</button>
                    <button onClick={() => addLetter('O')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >O</button>
                    <button onClick={() => addLetter('P')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >P</button>
                </div>
                <div className="mx-auto grid grid-cols-9  ">

                    <button onClick={() => addLetter('A')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >A</button>
                    <button onClick={() => addLetter('S')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >S</button>
                    <button onClick={() => addLetter('D')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >D</button>
                    <button onClick={() => addLetter('F')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >F</button>
                    <button onClick={() => addLetter('G')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >G</button>
                    <button onClick={() => addLetter('H')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >H</button>
                    <button onClick={() => addLetter('J')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >J</button>

                    <button onClick={() => addLetter('K')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >K</button>
                    <button onClick={() => addLetter('L')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >L</button>
                </div>

                <div className="mx-auto grid grid-cols-11  ">
                    <button onClick={() => handleEnter()} className="col-span-2 Wordle text-center w-28 h-14 bg-inherit  border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-1xl" >ENTER</button>
                    <button onClick={() => addLetter('Z')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >Z</button>
                    <button onClick={() => addLetter('X')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >X</button>
                    <button onClick={() => addLetter('C')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >C</button>
                    <button onClick={() => addLetter('V')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >V</button>
                    <button onClick={() => addLetter('B')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >B</button>
                    <button onClick={() => addLetter('N')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >N</button>
                    <button onClick={() => addLetter('M')} className="Wordle text-center w-14 h-14 bg-inherit border-2 border-gray-500 bg-gray-500  rounded-md m-1 text-4xl" >M</button>
                    <button onClick={() => handleDelete()} className="col-span-2 Wordle flex items-center justify-center w-28 h-14 bg-inherit border-gray-500 border-2 bg-gray-500 rounded-md m-1 text-4xl" ><LuDelete /></button>
                </div>

            </div>

            {solved && winnerBox(setSolved)}

        </div>
    )
}
export default Wordle