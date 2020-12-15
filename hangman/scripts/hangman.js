class Hangman {
    constructor(word, remainingGuesses) {
        this.word = word.toLowerCase().split("") //breaks it into its sperate arrays
        this.remainingGuesses = remainingGuesses
        this.guessLetters = []
        this.status = "Playing"
    }
    calculateStatus() {
        const finished = this.word.every((letter) => this.guessLetters.includes(letter) || letter === " ")

        if (this.remainingGuesses <= 0) {
            this.status = "Failed";
        } else if (finished) {
            this.status = "Finished";
        } else {
            this.status = "Playing";
        }
    }
gameOver() {
    const gameOver = (this.status === "Finished" || this.status === "Failed") 

        if (gameOver) 
            return true;  
        else
            return false;    
}

get statusMessage() {
    if (this.status === "Playing") {
        return `Guesses left: ${this.remainingGuesses}`;
    } else if (this.status === "Failed") {
        return `Nice Work! The word was "${this.word.join("")}".`; // this join joins the word without comma
    } else {
        return "Great work! You successfully guessed the word!";
    }
}
get puzzle() {
    let puzzle = ""
    this.word.forEach((letter) => {
        if (this.guessLetters.includes(letter) || letter === " ") {
            puzzle += letter
        } else {
            puzzle += "*"
        }
    })
    return puzzle
}
makeGuesses(guess) {
    guess = guess.toLowerCase()
    const uniqueGuess = !this.guessLetters.includes(guess)
    const isBadGuess = !this.word.includes(guess)
    if (this.status !== "Playing") {

    }

    if (uniqueGuess) {
        this.guessLetters.push(guess)
    }

    if (uniqueGuess && isBadGuess) {
        this.remainingGuesses--
    }

    this.calculateStatus()
}

}
