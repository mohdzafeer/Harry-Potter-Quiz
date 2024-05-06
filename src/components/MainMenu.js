import { useContext } from "react"
import { QuizContext } from "../Helpers/Context"
import '../App.css';

export const MainMenu = () => {
    const {  setgamestate } = useContext(QuizContext)
    return (
        <div className="bg-yellow-400 p-5 flex flex-col items-center rounded-lg mt-10 justify-center">
            <img className="hp" src="https://freepngimg.com/thumb/harry_potter/23827-9-harry-potter-logo-transparent-image.png" alt="Harry Potter Logo"></img>
            <button
            className="start-btn"
                onClick={() => { setgamestate("quiz") }}>
                Start Quiz
            </button>
        </div>
    )
}
