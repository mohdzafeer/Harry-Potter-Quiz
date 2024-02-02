import { useContext } from "react"
import { QuizContext } from "../Helpers/Context"
import '../App.css';

export const MainMenu = () => {
    const { gamestate, setgamestate } = useContext(QuizContext)
    return (
        <div className="Menu">
            <img className="hp" src="https://freepngimg.com/thumb/harry_potter/23827-9-harry-potter-logo-transparent-image.png"></img>
            <button
            className="start-btn"
                onClick={() => { setgamestate("quiz") }}>
                Start Quiz
            </button>
        </div>
    )
}
