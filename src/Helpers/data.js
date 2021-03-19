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
const baseUrl = 'https://miraskincareltd.com/controllers/processors/get-questions.php?limit=100'
 export var Questions = []
 export const Answers = []
 fetch(baseUrl)
 .then(res=>res.json()).then((data)=>{
   let response = data["response"];
   let _question = response["questions"];
for (const key in _question) {
    if (Object.hasOwnProperty.call(_question, key)) {
        const element = _question[key];
        if(element !==undefined && element !== ''){
         Questions.push(element);
            
        }
    }
}
 })