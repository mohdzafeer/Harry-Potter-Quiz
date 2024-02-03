import { useContext } from "react"
import { QuizContext } from "../Helpers/Context"
import { Questions } from "../Helpers/QuestionBank"

export const ViewAnswers=()=>{
    const {score ,setgamestate,setscore} = useContext(QuizContext)
    return (
        <div className="viewans">
            <button 
            className="next"
            onClick={()=>{
                setgamestate("menu");
                setscore(0);
            }}>Play Again</button>

            <div>
                <h1>Answers</h1>
                
                <div>
                    {Questions.map((ques)=>{
                        return <div>
                            <h3>{ques.prompt}</h3>
                            <p>A.{ques.optionA}</p>
                            <p>B.{ques.optionB}</p>
                            <p>C.{ques.optionC}</p>
                            <p>D.{ques.optionD}</p>
                            <p>Answer-{ques.answer}</p>
                            <> </>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}