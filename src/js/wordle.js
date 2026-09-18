const selectedWord="JUMFLARK"
const jumrow=[null,0]

function checkWord(word,row){

    if (isJumfl(word)){
        if (jumrow[0] !== row){
            jumrow[0] = row
            jumrow[1] = 0
        }

        jumrow[1] += 1

        if (isJum(word)){
            return 4;
        } 
        else if (jumrow[1] === 1){
            for (let rowIndex = 0; rowIndex < 5; rowIndex++){
                const rowElement = document.getElementById(`row-${rowIndex}`)
                if (!rowElement){
                    continue;
                }

                rowElement.className="grid grid-cols-8 mt-4"
                for (let cellIndex = 5; cellIndex < 8; cellIndex++){
                    const cell = document.createElement("div")
                    cell.id = `cell-${rowIndex}-${cellIndex}`
                    cell.className = "w-14 h-14 bg-inherit border-2 border-gray-500 m-1 text-4xl"
                    rowElement.appendChild(cell)
                }
            }
        }
        // is jumfl
        return 3;
    }

    for (let i=0;i<word.length;i++){
        let letterPosition=checkLetterPosition(word[i],i)
        const cell =document.getElementById(`cell-${row}-${i}`)

        if( letterPosition==1){
            if(cell){
                cell.style.backgroundColor="oklch(72.3% 0.219 149.579)";
            }
        }
        else if (letterPosition==2){
            if (cell){
                cell.style.backgroundColor="oklch(90.5% 0.182 98.111)";
            }
        }

    } 
}

function checkLetterPosition(letter,index){
    if(letter==selectedWord[index]){
        return 1;
    }
    else if (selectedWord.indexOf(letter)>-1) {
        return 2;
    }

}

function isJumfl(word){
    return word=="JUMFL";
}
function isJum(word){
    return word==selectedWord;
}


export default checkWord;