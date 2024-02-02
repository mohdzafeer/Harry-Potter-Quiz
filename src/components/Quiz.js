import { useContext, useState } from "react"
import { Questions } from "../Helpers/QuestionBank"
import { QuizContext } from "../Helpers/Context"


export const Quiz = () => {
    const {score, setscore,setgamestate } = useContext(QuizContext)
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [optionchoosen, setoptionchoosen] = useState('')

    const nextQuestion = () => {
        if(Questions[currentQuestion].answer==optionchoosen){
            setscore(score+1)
        }
        setcurrentQuestion(currentQuestion+1)
        
    }

    const finishQuiz=()=>{
        if(Questions[currentQuestion].answer==optionchoosen){
            setscore(score+1)
        }
        setgamestate("endScreen")
    }

    return (
        <div className="Menu">
            <h1>{Questions[currentQuestion].prompt}</h1>
            <div>
                <button onClick={() => { setoptionchoosen("A") }} className="options">{Questions[currentQuestion].optionA}</button>
                <button onClick={() => { setoptionchoosen("B") }} className="options">{Questions[currentQuestion].optionB}</button>
                <button onClick={() => { setoptionchoosen("C") }} className="options">{Questions[currentQuestion].optionC}</button>
                <button onClick={() => { setoptionchoosen("D") }} className="options">{Questions[currentQuestion].optionD}</button>
            </div>

            {currentQuestion==Questions.length-1 ? (
                <button 
                onClick={finishQuiz}
                className="next">Finish Quiz</button>
            ):(
                <button
                onClick={nextQuestion}
                className="next">Next</button>
            )}

            
        </div>
    )
}