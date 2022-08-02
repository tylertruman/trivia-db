import { ProxyState } from "../AppState.js";
import { Trivia } from "../Models/Trivia.js";



class TriviaService {
    async getNextTrivia(){
        if(!ProxyState.next){
        throw new Error('There are no more trivia questions.')
        }
        
        let res = await axios.get(ProxyState.next)
        ProxyState.trivia = res.data.results.map(t => new Trivia(t))
        ProxyState.next = res.data.next
    }

    async getTrivia(){
        let res = await axios.get('https://opentdb.com/api.php?amount=1&category=9&difficulty=easy&type=multiple')
        console.log('get Trivia response', res)
        ProxyState.trivia = res.data.results.map(t => new Trivia(t))
        ProxyState.next = res.data.next
    }
}

export const triviaService = new TriviaService()