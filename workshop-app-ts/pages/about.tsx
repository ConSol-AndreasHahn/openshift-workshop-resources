import { useState } from 'react'
import type { NextPage } from 'next'

const About: NextPage = () => {
  const [answer, setAnswer] = useState('')
  const [feedback, setFeedback] = useState('')

  const checkAnswer = () => {
    if (answer.toLowerCase() === 'nextjs') {
      setFeedback('✅ Richtig! Next.js macht Spaß.')
    } else {
      setFeedback('❌ Fast... Tipp: Diese App benutzt es 😉')
    }
  }

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-semibold mb-4">Über diese App</h1>
      <p className="text-lg max-w-xl text-center mb-6">
        Diese kleine Anwendung zeigt, wie man mit Next.js schnell Webseiten
        erstellen kann.{' '}
        Sie besteht aus zwei Seiten: einer Startseite und dieser Infoseite.
      </p>

      <div className="bg-gray-100 p-6 rounded-xl shadow-md text-center mb-6">
        <h2 className="text-xl font-bold mb-4">Mini-Quiz</h2>
        <p className="mb-2">Mit welchem Framework ist diese App gebaut?</p>
        <input
          type="text"
          className="border p-2 rounded w-64 mb-3"
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          placeholder="Antwort eingeben..."
        />
        <br />
        <button
          onClick={checkAnswer}
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Überprüfen
        </button>
        {feedback && <p className="mt-3 text-lg font-medium">{feedback}</p>}
      </div>

      <a href="/" className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Zurück zur Startseite
      </a>
    </main>
  )
}

export default About
