import { ProxyState } from "../AppState.js"
import { triviaService } from "../Services/TriviaService.js"
import { Pop } from "../Utils/Pop.js"


function _drawTrivia(){
    let template = ''
    ProxyState.trivia.forEach(t => template += t.Template)
    document.getElementById('trivia').innerHTML = `
    
        ${template}
    
    <div>
    <button class="btn btn-success mt-3 col-2 offset-5 p-3 elevation-1" onclick="app.triviaController.goGetTriviaFromTrivia()">Next Question</button>
    </div>
    `
}

export class TriviaController{
    constructor(){
        ProxyState.on('trivia', _drawTrivia)
    }

    async goGetTriviaFromTrivia(){
        try {
            await triviaService.getTrivia()
        } catch (error) {
            Pop.error(error)
        }
    }

    async next(){
        try {
            await triviaService.getNextTrivia()
        } catch (error) {
            Pop.error(error)
        }
    }

    correctAnswer(){
        Pop.success('Correct!')
    }

    incorrectAnswer(){
        Pop.error('Wrong!')
    }
}