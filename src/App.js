import './App.css';
import CustomBtn from './components/CustomBtn'
import Screen from './components/Screen'
import React, { useState } from 'react';
import StartPage from './pages/StartPage';
import QuizPage from './pages/QuizPage';
import EndPage from './pages/EndPage';
import { QuizContext } from './Helpers/Contexts';
function App() {
    const [quizState, setQuizState] = useState('start')
    const [score, setScore] = useState(0)
  
//   return (
//     <div>
//      <Screen>
//          <div className="countdown">
//                     <img src="assets/icon/clock.svg" alt="clock"/><span>1:49</span>
                    
//                 </div>
//                 <div className="num-question">
//                     Question <span>2</span> of <span>10</span>
//                 </div>
//                 <div className="question">
//                     <p className="question-para">What is the question of this esxrdctfvgykbhjlkn jwzesxdrchf tgvjhkbjlkmlwze sxdrcfgvhbjnkmlsdxfcgv hbjnkml aszd
//                     azsdfcgvhbjdbfshdgahh aggkjrewawfaw?</p>
//                 </div>
//             <div className="screen__bottom">
            
//             </div>
//     </Screen> 
//     <section className="options">
//         <CustomBtn cname="option__button outline"> A. Option A</CustomBtn>
//         <CustomBtn cname="option__button outline"> B. Option B</CustomBtn>
//         <CustomBtn cname="option__button outline"> C. Option C</CustomBtn>
//         <CustomBtn cname="option__button outline"> D. Option D</CustomBtn>
//     </section>
//     <section className="prev-next">
//         <CustomBtn cname= "previous">Previous</CustomBtn>
//         <CustomBtn cname= "next">Next</CustomBtn>
//     </section>
//     </div>
//   );
    return (
        <>
<QuizContext.Provider value={{quizState, setQuizState, score, setScore }}>
        {quizState === "start" && <StartPage />}
        {quizState === "playing" && <QuizPage />}
        {quizState  === "finished" && <EndPage />}
    </QuizContext.Provider>
        </>

    )

}

export default App;
