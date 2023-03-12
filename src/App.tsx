import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { getQuizDetails } from './services/quiz_services';
import { QuestionType } from './Types/quiz_types';
import QuestionCard from './Components/QuestionCard';
function App() {

  let [quiz , setQuiz] = useState<QuestionType[]>([]) 
  let [currentStep , setCurrentStep] = useState(0)
  let [score , setScore] = useState(0)
  useEffect(()=>{ 
      async function fetchData(){
       const questions: QuestionType[] =  await getQuizDetails(5 , 'easy'); 
       setQuiz(questions);
      }
      fetchData()
   } , [])
   const handleSubmit = (e: React.FormEvent<EventTarget>, userAns: string) =>{
    e.preventDefault()
    const currentQuestion: QuestionType = quiz[currentStep]
    if(userAns === currentQuestion.answer){
       setScore(++score);
    }
    if(currentStep !== quiz.length-1)
       setCurrentStep(++currentStep)
    else{
      alert('Your Final Score is : ' + score + "out of " + quiz.length) 
      setCurrentStep(0)
      setScore(0)

    }   
   }
   if(!quiz.length){
    return <h1>Loading</h1>
   }
  return (
    <div className="App">
      <h1>Quiz App</h1>
      <QuestionCard 
      options={quiz[currentStep].option}
      question={quiz[currentStep].question}
      callback={handleSubmit}
      />
    </div>
  );
}

export default App;
