import React, {useState}from 'react'
import { Navbar } from './components/Navbar';
import { Footer } from './components/Footer';

export const App = () => {

  const [currentQuestion, setcurrentQuestions] = useState(0);
  const [showScore, setshowScore] = useState(false);
  const [score, setscore] = useState(0);

  // questions

  const allQuestions = [
    {
      text: 'Who is Aldrich?' ,
      options: [
        {answerText: 'Maangas', isCorrect: true},
        {answerText: 'Gwapo', isCorrect: false},
        {answerText: 'Talentado', isCorrect: false},
      ],
    },
    {
      text: 'Who is Iris Claudette Ablaza?' ,
      options: [
        {answerText: 'Maganda', isCorrect: false},
        {answerText: 'Pretty', isCorrect: false},
        {answerText: 'Gorgeous', isCorrect: true},
      ],
    },
    {
      text: 'Sino ang asawa ni Iris?' ,
      options: [
        {answerText: 'Molly', isCorrect: false},
        {answerText: 'Aldrich', isCorrect: true},
        {answerText: 'Laptop', isCorrect: false},
      ],
    },
    {
      text: 'Si molly ay isang?' ,
      options: [
        {answerText: 'Makulit', isCorrect: false},
        {answerText: 'Shih Tzu', isCorrect: false},
        {answerText: 'Aso', isCorrect: true},
      ],
    },
  ]
  
  const handleAnswerOptions = (isCorrect) => {
if (isCorrect) {
  setscore(score + 1);
}
const handleNextQuestion = currentQuestion + 1;
if (handleNextQuestion < allQuestions.length) {
  setcurrentQuestions(handleNextQuestion);
  } else {
    setshowScore(true); }
  }




  return (
      
    <>
    <Navbar />
    <Footer/>
    <>
    </><div className='flex w-full h-screen justify-center items-center bg-gradient-to-r from-cyan-950 via-cyan-600 to-cyan-300 background-animate'>
        <div className='backdrop-filter backdrop-blur-sm bg-opacity-50 bg-slate-100 p-12 rounded-lg shadow-2xl w-full max-w-xl'>

          {showScore ? (
            <>
              <div className='text-slate-700 text-xl font-semibold'>
                You scored {score} out of {allQuestions.length}
              </div>
              <br></br>
              <button className='m-2 h-10 w-24 rounded-md bg-slate-200 hover:bg-slate-300 hover:shadow-xl transition-all duration-800' onClick={() => { window.location.reload(); } }>Ulit!</button>
            </>
          ) : (
            <>
              <div className='text-slate-700 text-xl font-semibold'>
                <div className='m-4'>
                  <span>Question {currentQuestion + 1}</span>/ {allQuestions.length}
                </div>
                <div className='m-4'>
                  {allQuestions[currentQuestion].text}
                </div>
                <div className='w-full'>
                  {allQuestions[currentQuestion].options.map((options) => (
                    <button className='m-2 h-10 w-24 rounded-md text-gray hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium text-sm px-5 py-2.5 me-2 mb-2  transition-all duration-500 ease-in-out' onClick={() => handleAnswerOptions(options.isCorrect)}>{options.answerText}</button>
                  ))}

                </div>
              </div>
            </>
          )}

        </div>

      </div></>
  
  )
}


export default App;