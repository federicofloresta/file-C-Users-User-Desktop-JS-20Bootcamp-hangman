//This is how hasOwnProperty works. It goes first to product 
//Literal sythanx - when the synthax of the language allows us to define a value of a 
//specific type using a series of characters 
//Primitive value: value that has no properties: string, number, bollean, undefined, null
//Object: myObject --> Object.prototype --> null
//Array: myArray --> Array.prototype --> Object.prototype --> null
//Function: myFunction --> Function.prototype --> Object.prototype --> null
//String: myString --> String.prototype -- Object.prototype --> null
//Number: myNumber --> Number.prototype --> Object.prototype --> null
//Boolean: myBoolean --> Boolean.prototype --> Object.prototype --> null
///HTTP: HyperText Transfer Protocol
//Request - What do we want to do
//Response - What was actually done

const puzzleEl = document.querySelector("#puzzle")
const guessEl = document.querySelector("#guesses")
let attempts

window.addEventListener("keypress", (e) => {
    const guess = String.fromCharCode(e.charCode)
render()
    if (attempts.gameOver()) {
        return startGame()
    }
    else {
    return
    }
})


const render = () => {
    puzzleEl.innerHTML = ""
    guessEl.textContent = attempts.statusMessage

    attempts.puzzle.split("").forEach((letter) => {
        const letterEl = document.createElement("span")
        letterEl.textContent = letter
        puzzleEl.appendChild(letterEl)
    })


}

const startGame = async () => {
    const puzzle = await getPuzzle("2")
    attempts = new Hangman(puzzle, 5)
    render()
}


document.querySelector("#reset").addEventListener("click", startGame)

startGame()

//Assynchronous execution: we can start some tasks and get other tasks complete, while we wait
//Synchronous: We need to wait until the task at hand is done then we will be able to interact with other things in the website