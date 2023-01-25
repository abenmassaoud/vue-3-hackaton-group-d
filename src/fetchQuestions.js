import {shuffle} from 'lodash' 

export const fetchQuestions = async (count) => {
    const baseUrl = 'https://the-trivia-api.com/api'
    const endpoint = 'questions'
    const searchParams = new URLSearchParams({
        limit: count.toString()
    }).toString()
    const res = await fetch(`${baseUrl}/${endpoint}?${searchParams}`)
    const questions = await res.json()
    return shuffle(questions.map((question) => ({
        ...question,
        allAnswers: [
            ...question.incorrectAnswers,
            question.correctAnswer,
        ]
    })))
}

// function shuffled(array) {
//     let currentIndex = array.length,  randomIndex;
  
//     // While there remain elements to shuffle.
//     while (currentIndex != 0) {
  
//       // Pick a remaining element.
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex--;
  
//       // And swap it with the current element.
//       [array[currentIndex], array[randomIndex]] = [
//         array[randomIndex], array[currentIndex]];
//     }
  
//     return array;
//   }