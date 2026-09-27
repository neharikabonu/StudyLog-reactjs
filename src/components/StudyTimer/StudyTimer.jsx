import React, { useEffect, useState } from 'react'
import './StudyTimer.css'

const StudyTimer = ({ studySession, finishStudySession }) => {

  const [seconds, setSeconds] = useState(0)
  const [isRunning, setIsRunning] = useState(false)

  useEffect(() => {

    if (!isRunning) {
      return
    }

    const timer = setInterval(() => {
      setSeconds((prevSeconds) => prevSeconds + 1)
    }, 1000)

    return () => {
      clearInterval(timer)
    }

  }, [isRunning])

  useEffect(() => {

    if (studySession) {
      setSeconds(0)
      setIsRunning(true)
    }

  }, [studySession])

  const formatTime = (totalSeconds) => {

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const remainingSeconds = totalSeconds % 60

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(remainingSeconds).padStart(2, "0")}`
  }

  const pauseTimer = () => {
    setIsRunning(false)
  }

  const resumeTimer = () => {
    setIsRunning(true)
  }

  const handleFinish = () => {
    setIsRunning(false)
    finishStudySession(seconds)
    setSeconds(0)
  }

  return (
    <div className="study-timer">

      <h2>Study Timer</h2>

      {studySession && (
        <p>
          {studySession.subject} - {studySession.topic}
        </p>
      )}

      <div className="timer-display">
        {formatTime(seconds)}
      </div>

      {studySession && (
        <div className="timer-buttons">

          {isRunning ? (
            <button onClick={pauseTimer}>
              Pause
            </button>
          ) : (
            <button onClick={resumeTimer}>
              Resume
            </button>
          )}

          {seconds > 0 && (
            <button onClick={handleFinish}>
              Finish Session
            </button>
          )}

        </div>
      )}

    </div>
  )
}

export default StudyTimer