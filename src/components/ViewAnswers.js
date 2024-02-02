import { useContext } from "react"
import { QuizContext } from "../Helpers/Context"

export const ViewAnswers=()=>{
    const {score ,setgamestate,setscore} = useContext(QuizContext)
    return (
        <div className="Menu">
            <button 
            className="next"
            onClick={()=>{
                setgamestate("menu");
                setscore(0);
            }}>Play Again</button>

            <div>
                <h1>Answers</h1>
                
            </div>
        </div>
    )
}