import { useContext, useState } from "react"
import { Questions } from "../Helpers/QuestionBank"
import { QuizContext } from "../Helpers/Context"


export const Quiz = () => {
    const {score, setscore,setgamestate } = useContext(QuizContext)
    const [currentQuestion, setcurrentQuestion] = useState(0)
    const [optionchoosen, setoptionchoosen] = useState('')

    const nextQuestion = () => {
        if(Questions[currentQuestion].answer===optionchoosen){
            setscore(score+1)
        }
        setcurrentQuestion(currentQuestion+1)
        
    }

    const finishQuiz=()=>{
        if(Questions[currentQuestion].answer===optionchoosen){
            setscore(score+1)
        }
        setgamestate("endScreen")
    }

    return (
        <div className="bg-yellow-400 p-5 flex flex-col items-center w-10/12 rounded-lg">
            <h1 className="text-xl font-bold text-red-900">{Questions[currentQuestion].prompt}</h1>
            <div className="flex flex-col items-center w-11/12">
                <button onClick={() => { setoptionchoosen("A") }} className="options">{Questions[currentQuestion].optionA}</button>
                <button onClick={() => { setoptionchoosen("B") }} className="options">{Questions[currentQuestion].optionB}</button>
                <button onClick={() => { setoptionchoosen("C") }} className="options">{Questions[currentQuestion].optionC}</button>
                <button onClick={() => { setoptionchoosen("D") }} className="options">{Questions[currentQuestion].optionD}</button>
            </div>

            {currentQuestion===Questions.length-1 ? (
                <button 
                onClick={finishQuiz}
                className="bg-yellow-400 border hover:bg-red-900 border-black w-9/12 h-16 text-2xl m-4 duration-300 text-red-900 font-bold hover:text-yellow-400 rounded">Finish Quiz</button>
            ):(
                <button
                onClick={nextQuestion}
                className="bg-yellow-400 border hover:bg-red-900 border-black w-9/12 h-16 text-2xl m-4 duration-300 text-red-900 font-bold hover:text-yellow-400 rounded">Next</button>
            )}

            
        </div>
    )
}