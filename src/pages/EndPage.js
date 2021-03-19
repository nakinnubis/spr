import React, { useState, useContext } from 'react';
import { QuizContext } from '../Helpers/Contexts';
import '../App.css';
import Screen from '../components/Screen';
import { Questions } from '../Helpers/data';



const EndPage =()=> {
        const { score } = useContext(QuizContext);

    return (
    <>
    <Screen>
         
                   
        <p className="question-para">Your score is <span>{score}</span> of <span>{Questions.length}</span> <br></br>Thank you</p>
               
    </Screen> 
    
    </>
    ) 

    
}
export default EndPage