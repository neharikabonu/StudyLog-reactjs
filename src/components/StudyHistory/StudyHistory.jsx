import React from 'react'
import './StudyHistory.css'

const StudyHistory = ({ sessions }) => {

  const formatTime = (totalSeconds) => {

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`
  }

  return (
    <section className="study-history">

      <h2>Study History</h2>

      {sessions.length === 0 ? (
        <p>No study sessions yet.</p>
      ) : (

        <div className="history-list">

          {sessions.map((session) => (

            <div className="history-card" key={session.id}>

              <div>
                <h3>{session.subject}</h3>
                <p>{session.topic}</p>
              </div>

              <div>
                <p>{formatTime(session.duration)}</p>
                <small>
                  {new Date(session.date).toLocaleDateString()}
                </small>
              </div>

            </div>

          ))}

        </div>

      )}

    </section>
  )
}

export default StudyHistory