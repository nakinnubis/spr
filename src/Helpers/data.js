// export const quiz = [

    
//   {id: 1, question: 'question 1', choice: [{indicator: 'A', value: 'a'}, {indicator: 'B', value: 'bbb'}, {indicator: 'C', value: 'ccc'}, {indicator: 'D', value: 'ddd'}], answer: false, answered: false, option: 'A'},
//   {id: 2, question: 'question 2', choice: [{indicator: 'A', value: 'aa'}, {indicator: 'B', value: 'bbb'}, {indicator: 'C', value: 'ccc'}, {indicator: 'D', value: 'ddd'}], answer: false, answered: false, option: 'A'},
//   {id: 3, question: 'question 3', choice: [{indicator: 'A', value: 'aaa'}, {indicator: 'B', value: 'bbb'}, {indicator: 'C', value: 'ccc'}, {indicator: 'D', value: 'ddd'}], answer: false, answered: false, option: 'A'},
//   {id: 4, question: 'question 4', choice: [{indicator: 'A', value: 'aaaa'}, {indicator: 'B', value: 'bbb'}, {indicator: 'C', value: 'ccc'}, {indicator: 'D', value: 'ddd'}], answer: false, answered: false, option: 'A'},
//   {id: 5, question: 'question 5', choice: [{indicator: 'A', value: 'aaaaa'}, {indicator: 'B', value: 'bbb'}, {indicator: 'C', value: 'ccc'}, {indicator: 'D', value: 'ddd'}], answer: false, answered: false, option: 'A'},
//   {id: 6, question: 'question 6', choice: [{indicator: 'A', value: 'aaaaaa'}, {indicator: 'B', value: 'bbb'}, {indicator: 'C', value: 'ccc'}, {indicator: 'D', value: 'ddd'}], answer: false, answered: false, option: 'A'},
//   {id: 7, question: 'question 7', choice: [{indicator: 'A', value: 'aaaaaaa'}, {indicator: 'B', value: 'bbb'}, {indicator: 'C', value: 'ccc'}, {indicator: 'D', value: 'ddd'}], answer: false, answered: false, option: 'A'},
// ]

// export const Questions = [
//     {
//         prompt: "What is my name?",
//         optionA: "John",
//         optionB: "Jake",
//         optionC: "Josh",
//         optionD: "Pedro",
//         answer: "D",
//     },
//     {
//         prompt: "Which of this is not a programming language?",
//         optionA: "Python",
//         optionB: "JavaScript",
//         optionC: "MC-03",
//         optionD: "Java",
//         answer: "C",
//     },
//     {
//         prompt: "Which of this is not a javascript framework?",
//         optionA: "React",
//         optionB: "Angular",
//         optionC: "Vue",
//         optionD: "Java",
//         answer: "D",
//     },
// ];
class QuestionObjects{
    constructor(objectid, question, multiplechoice, timeallowedinseconds, answer, userchoice, difficultylevel, isansweredcorrectly) {
        objectid = this.objectid
        question = this.question
        multiplechoice = this.multiplechoice
        timeallowedinseconds = this.timeallowedinseconds
        answer = this.answer
        userchoice = this.userchoice
        difficultylevel = this.difficultylevel
        isansweredcorrectly = this.isansweredcorrectly
    }
}
class MultipleChoice{
    constructor(optionA, optionB, optionC, optionD) {
        optionA = this.optionA
        optionB = this.optionB
        optionC = this.optionC
        optionD = this.optionD
    }
}
const baseUrl = 'https://my-json-server.typicode.com/nakinnubis/spr/db'
 export var Questions = []
 export const Answers = []
 fetch(baseUrl)
 .then(res=>res.json()).then((data)=>{
   let response = data["response"];
   let _question = response["questions"];
for (const key in _question) {
    if (Object.hasOwnProperty.call(_question, key)) {
        const element = _question[key];
        if (element !== undefined && element !== '') {
           let multichoice = Object.assign(new MultipleChoice,element["MultipleChoice"])
            var questionobj = Object.assign(new QuestionObjects, element);
            questionobj.multiplechoice = multichoice
           Questions.push(questionobj);
        }
    }
}
 })