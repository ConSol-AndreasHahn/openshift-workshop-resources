import fs from 'fs'
import path from 'path'
import yaml from 'js-yaml'
import type { GetServerSideProps, NextPage } from 'next'

type Props = {
  userName: string | null
  hostName: string
  backgroundColor: string
}

const Home: NextPage<Props> = ({ userName, hostName, backgroundColor }) => {
  return (
    <main
      className="min-h-screen flex flex-col items-center justify-center p-8"
      style={{ backgroundColor }}
    >
      <h1 className="text-4xl font-bold mb-6">Willkommen zum Workshop</h1>
      <p className="text-2xl mb-4">Hallo {userName || 'Teilnehmer'}! 👋</p>
      <p className="text-lg mb-2">Dein Hostname: {hostName}</p>
      <p className="text-lg mb-8">
        Dies ist die Startseite unserer kleinen Next.js-Anwendung.
      </p>
      <div className="flex gap-4">
        <a
          href="/about"
          className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Über die App
        </a>
        <a
          href="/form"
          className="bg-purple-600 text-white px-4 py-2 rounded hover:bg-purple-700"
        >
          Formular
        </a>
      </div>
    </main>
  )
}

export const getServerSideProps: GetServerSideProps<Props> = async () => {
  const userName = process.env.GREETING_DEFAULT || null
  const hostName = process.env.HOSTNAME || 'TO DEFINE'

  let backgroundColor = '#f9fafb' // Default (Tailwind: gray-50)

  try {
    const filePath = '/config/config.yaml'
    if (fs.existsSync(filePath)) {
      const fileContents = fs.readFileSync(filePath, 'utf8')
      const config = yaml.load(fileContents) as { backgroundColor?: string } | undefined
      if (config && typeof config.backgroundColor === 'string') {
        backgroundColor = config.backgroundColor
      }
    }
  } catch (err) {
    // use default backgroundColor
    console.warn('Could not load config.yaml, using default backgroundColor')
  }

  return {
    props: { userName, hostName, backgroundColor },
  }
}

export default Home
