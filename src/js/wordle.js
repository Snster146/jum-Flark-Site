const selectedWord="JUMFLARK"

function checkWord(word,row){
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

export default checkWord;