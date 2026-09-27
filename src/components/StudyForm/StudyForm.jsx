import React, { useState } from 'react'
import './StudyForm.css'

const StudyForm = ({ startStudySession, studySession }) => {

  const [subject, setSubject] = useState("")
  const [topic, setTopic] = useState("")

  const handleSubmit = (event) => {
    event.preventDefault()

    if (!subject || !topic) {
      alert("Please enter subject and topic")
      return
    }

    startStudySession(subject, topic)
    setSubject("")
    setTopic("")
  }

  return (
    <div className="study-form-wrapper">

      <h2>Start a Study Session</h2>

      <form className="study-form" onSubmit={handleSubmit}>

        <div className="form-field">
          <label htmlFor="subject">Subject</label>

          <input
            id="subject"
            type="text"
            placeholder="e.g. Java"
            value={subject}
            disabled={studySession}
            onChange={(event) => {
              setSubject(event.target.value)
            }}
          />
        </div>

        <div className="form-field">
          <label htmlFor="topic">Topic</label>

          <input
            id="topic"
            type="text"
            placeholder="e.g. Collections"
            value={topic}
            disabled={studySession}
            onChange={(event) => {
              setTopic(event.target.value)
            }}
          />
        </div>

        <button type="submit" disabled={studySession}>
          Start Studying
        </button>

      </form>

    </div>
  )
}

export default StudyForm