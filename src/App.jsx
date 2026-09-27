import React, { useEffect, useState } from 'react'
import './App.css'

import Header from './components/Header/Header'
import Dashboard from './components/Dashboard/Dashboard'
import StudyForm from './components/StudyForm/StudyForm'
import StudyTimer from './components/StudyTimer/StudyTimer'
import StudyHistory from './components/StudyHistory/StudyHistory'

const App = () => {

  const [studySession, setStudySession] = useState(null)
  const [sessions, setSessions] = useState(() => {

    const savedSessions = localStorage.getItem("studySessions")

    return savedSessions ? JSON.parse(savedSessions) : []
  })

  useEffect(() => {

    localStorage.setItem(
      "studySessions",
      JSON.stringify(sessions)
    )

  }, [sessions])

  const startStudySession = (subject, topic) => {
    setStudySession({
      subject,
      topic
    })
  }

  const finishStudySession = (duration) => {

    const newSession = {
      id: Date.now(),
      subject: studySession.subject,
      topic: studySession.topic,
      duration: duration,
      date: new Date()
    }

    setSessions((prevSessions) => [
      ...prevSessions,
      newSession
    ])

    setStudySession(null)
  }

  return (
    <div className="app">

      <Header />

      <Dashboard sessions={sessions} />

      <div className="main-content">

        <StudyForm
          startStudySession={startStudySession}
          studySession={studySession}
        />

        <StudyTimer
          studySession={studySession}
          finishStudySession={finishStudySession}
        />

      </div>

      <StudyHistory
        sessions={sessions}
      />

    </div>
  )
}

export default App