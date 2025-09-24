import { useState } from 'react'
import type { NextPage } from 'next'

const FormPage: NextPage = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-8">
      <h1 className="text-3xl font-semibold mb-4">Formular-Beispiel</h1>
      <p className="mb-6 text-lg text-center max-w-xl">
        Gib unten deinen Namen und eine kurze Nachricht ein.{' '}
        Die Eingaben werden sofort live angezeigt.
      </p>

      <div className="bg-gray-100 p-6 rounded-xl shadow-md w-full max-w-md">
        <label className="block mb-2 font-medium">Dein Name:</label>
        <input
          type="text"
          className="border p-2 rounded w-full mb-4"
          value={name}
          onChange={(e) => setName(e.target.value)}
          placeholder="z. B. Anna"
        />

        <label className="block mb-2 font-medium">Nachricht:</label>
        <textarea
          className="border p-2 rounded w-full mb-4"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Schreibe etwas..."
        />

        <div className="bg-white p-4 rounded border mt-4">
          <h2 className="text-xl font-semibold mb-2">Live Vorschau:</h2>
          <p>
            <strong>Name:</strong> {name || '—'}
          </p>
          <p>
            <strong>Nachricht:</strong> {message || '—'}
          </p>
        </div>
      </div>

      <a href="/" className="mt-6 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
        Zurück zur Startseite
      </a>
    </main>
  )
}

export default FormPage
