

export class Trivia {
    constructor({question, incorrect_answers, correct_answer}){
        this.question = question,
        this.incorrectAnswers = incorrect_answers,
        this.correctAnswer = correct_answer
    }



    get Template() {
        return `
        <div class="col-10 offset-1 bg-card text-center p-5 mt-5 card elevation-1">
          <h1 class="pb-5">${this.question}</h1>
          <button class="btn btn-info p-3 mb-2 mx-1" onclick="app.triviaController.incorrectAnswer()">${this.incorrectAnswers[0]}</button>
          <button class="btn btn-info p-3 mb-2 mx-1" onclick="app.triviaController.incorrectAnswer()">${this.incorrectAnswers[1]}</button>
          <button class="btn btn-info p-3 mb-2 mx-1" onclick="app.triviaController.incorrectAnswer()">${this.incorrectAnswers[2]}</button>
          <button class="btn btn-info p-3 mb-2 mx-1" onclick="app.triviaController.correctAnswer()">${this.correctAnswer}</button>
          </div>`
    }
}