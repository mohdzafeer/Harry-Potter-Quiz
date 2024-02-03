import { useContext } from "react"
import { QuizContext } from "../Helpers/Context"


export const EndScreen = () => {
    const {score ,setgamestate,setscore} = useContext(QuizContext)

    return (
        <div className="Menu">
            <h1>Your Score : {score}</h1>
            <button 
            className="next"
            onClick={()=>{
                setgamestate("menu");
                setscore(0);
            }}>Play Again</button>
            <button
            onClick={()=>[
                setgamestate("viewAnswers")
            ]}
            className="next">View Answers</button>
        </div>
    )
}