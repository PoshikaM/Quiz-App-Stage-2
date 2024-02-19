import './App.css'
import QuizApp from './Components/QuizApp'
import Questions from './resources/quizQuestion.json'

function App() {

  return (
    <div>
      <QuizApp Data={Questions}/>
    </div>
  )
}

export default App
