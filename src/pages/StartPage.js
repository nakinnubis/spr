import '../App.css'
import CustomBtn from '../components/CustomBtn'
import Screen from '../components/Screen'
import React, { useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts'

const StartPage =()=> {
    const { quizState, setQuizState } = useContext(QuizContext)
    return (
    <>
    <Screen>
         
                   
        <p className="question-para">You are about to Start the quiz<br></br>Click Start To begin</p>
               
    </Screen> 
     <section className="prev-next">
        <CustomBtn cname= "next" function={()=>{
            setQuizState("playing")
        }}>Start</CustomBtn>
    </section>
    </>
    ) 

    
}
export default StartPage