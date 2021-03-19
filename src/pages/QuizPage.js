import React, { useState, useContext, useEffect } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';
import CustomBtn from '../components/CustomBtn'
import Screen from '../components/Screen'
import { Questions } from '../Helpers/data';



const QuizPage =()=> {
   
    const { score, setScore, setQuizState } = useContext(QuizContext);
    const [currQuestion, setCurrQuestion] = useState(0);
    const [optionChosen, setOptionChosen] = useState("")
    const [timer, setTimer] = useState(10)
    const [second, setSecond] = useState(10)
    const [answered, setAnswered] = useState(false)
    const nextQuestion = () => {
        if (Questions[currQuestion].answer == optionChosen){
            setScore(score + 1)
            setAnswered(!answered)
        }
        setCurrQuestion(currQuestion + 1);
    }

    const prevQuestion = () => {
        
            setCurrQuestion(currQuestion - 1)
            if (currQuestion === 0){
            
            setCurrQuestion(Questions.length - 1)
        }

    }
    const finishQuiz = () => {
        if (Questions[currQuestion].answer == optionChosen){
            setScore(score + 1)
        }
        setQuizState('finished')
    }

    useEffect(() => {
        const time = setInterval(()=> {
            setTimer(timer -1)
            // setTimer(c => c - 1)
            //     setSecond(c => c - 1)
            //     if(second == 59) {
            //         setSecond(0)
            //     }
        }, 1000);
        if (timer < 0){
            clearInterval(time)
            setQuizState('finished')
        }
        return ()=> clearInterval(time)
    }, [timer]);
    return (
    
        <div>  
        <Screen>
            <div className="countdown">
                        <img src="assets/icon/clock.svg" alt="clock"/><span>{Math.floor(timer / 60)} : {(timer % 60)}</span>
                        
                    </div>
                    <div className="num-question">
                        Question <span>{currQuestion + 1}</span> of <span>{Questions.length}</span>
                    </div>
                    <div className="question">
                        <p className="question-para">{Questions[currQuestion]["Question"]}</p>
                    </div>
                <div className='dots'>
            {Questions?.map((data) => {
              const success = !answered && (Questions[currQuestion] === optionChosen)
            //   const fail = !data?.answer && data?.answered
            //   const notA  nswered = !data?.answer && !data?.answered
              return (
                <div
                onClick={() => {
                    if(success) {

                    }
                }}
                  className={
                    // success
                    //   ? "dots_green"
                    //   : fail
                    //   ? "dots_red"
                    //   : "dots_grey"
                    success ? "dots_green" : 'dots_red'
                  }
                />
              );
            })}
          </div>
        </Screen> 
        <section className="options">
            <CustomBtn function={()=>setOptionChosen('A')} cname="option__button outline"> {Questions[currQuestion]["MultipleChoice"]["optionA"] }</CustomBtn>
            <CustomBtn function={()=>setOptionChosen('B')} cname="option__button outline"> {Questions[currQuestion]["MultipleChoice"]["optionB"] }</CustomBtn>
            <CustomBtn function={()=>setOptionChosen('C')} cname="option__button outline"> {Questions[currQuestion]["MultipleChoice"]["optionC"]  }</CustomBtn>
            <CustomBtn function={()=>setOptionChosen('D')} cname="option__button outline"> {Questions[currQuestion]["MultipleChoice"]["optionD"]  }</CustomBtn>


        </section>
        <section className="prev-next">
            <CustomBtn function={prevQuestion} cname= "previous">Previous</CustomBtn>
            {currQuestion == Questions.length - 1 ? (
                <CustomBtn function={finishQuiz} cname= "next">Finish</CustomBtn>
            ):(
                <CustomBtn function={nextQuestion} cname= "next">Next</CustomBtn>
            )}
        </section>
        </div>
  );
}

export default QuizPage;