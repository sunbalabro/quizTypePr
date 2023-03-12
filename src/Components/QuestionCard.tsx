import React, { useState } from 'react'
import { questionPropType } from '../Types/quiz_types';
const QuestionCard: React.FC<questionPropType> = ({ question, options, callback }) => {
 
  let [selectedAns , setSelectedAns] = useState('')
  const handleSelection = (ev: any) =>{
        
        setSelectedAns(ev.target.value)
  }
  return (
    <div className='question-container'>
      <div className='question'>
      <h4>{question}</h4>
      </div>
      <form onSubmit={(e: React.FormEvent<EventTarget>)=>callback(e,selectedAns)} className="question-form">
        {
          options.map((item: string, index: number) => (
            <div key={index}>
              <label>
                <input
                  type='radio'
                  className="radio"
                  required
                  value={item}
                  checked={selectedAns === item}
                  onChange={handleSelection}
                  name="option"
                /> {item}
              </label>
            </div>
          ))
        }

        <input type='submit' name='submit' className="submit" />
      </form>
    </div>
  )
}

export default QuestionCard;