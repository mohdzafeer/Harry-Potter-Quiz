import { useContext } from "react"
import { QuizContext } from "../Helpers/Context"
import { Questions } from "../Helpers/QuestionBank"

export const ViewAnswers=()=>{
    const {setgamestate,setscore} = useContext(QuizContext)
    return (
        <div className="bg-yellow-400 px-10 py-5 rounded-lg flex flex-col items-center gap-4 ">
            <button 
            className="bg-yellow-400 border hover:bg-red-900 border-black w-9/12 h-20 text-2xl m-4 duration-300 text-red-900 font-bold hover:text-yellow-400 rounded "
            onClick={()=>{
                setgamestate("menu");
                setscore(0);
            }}>Play Again</button>

            <div>
                <h1 className="text-3xl font-extrabold ">Answers</h1>
                
                <div className="w-full h-full ">
                    {Questions.map((ques)=>{
                        return <div className="my-5">
                            <h3 className="text-xl font-bold">{ques.prompt}</h3>
                            <p className="text-lg" ><span className="font-bold">A. </span>{ques.optionA}</p>
                            <p className="text-lg" ><span className="font-bold">B. </span>{ques.optionB}</p>
                            <p className="text-lg" ><span className="font-bold">C. </span>{ques.optionC}</p>
                            <p className="text-lg" ><span className="font-bold">D. </span>{ques.optionD}</p>
                            <p className="font-semibold italic text-xl">Answer-{ques.answer}</p>
                            <> </>
                        </div>
                    })}
                </div>
            </div>
        </div>
    )
}