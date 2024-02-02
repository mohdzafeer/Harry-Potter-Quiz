
import { useState, useContext } from 'react';
import './App.css';
import { MainMenu } from './components/MainMenu';
import { Quiz } from './components/Quiz';
import { EndScreen } from './components/EndScreen';
import { QuizContext } from './Helpers/Context';
import { ViewAnswers } from './components/ViewAnswers';


function App() {

  const [gamestate, setgamestate] = useState("menu")
  const [score, setscore] = useState(0)

  return (
    <div className="App">
      <h1 style={{ color: "#ffc500" }}>QUIZ APP</h1>
      <QuizContext.Provider
        value={{ gamestate, setgamestate, score, setscore }}>

        {gamestate === "menu" && <MainMenu />}
        {gamestate === "quiz" && <Quiz />}
        {gamestate === "endScreen" && <EndScreen />}
        {gamestate==="viewAnswers" && <ViewAnswers/>}

      </QuizContext.Provider>
    </div>
  );
}

export default App;
