import React from 'react'
import './Dashboard.css'

const Dashboard = ({ sessions }) => {

  const now = new Date()

  // Today
  const today = now.toDateString()

  const todaySessions = sessions.filter((session) => {
    return new Date(session.date).toDateString() === today
  })

  // This Week
  const startOfWeek = new Date(now)
  startOfWeek.setDate(now.getDate() - now.getDay())
  startOfWeek.setHours(0, 0, 0, 0)

  const weekSessions = sessions.filter((session) => {
    return new Date(session.date) >= startOfWeek
  })

  // This Month
  const startOfMonth = new Date(
    now.getFullYear(),
    now.getMonth(),
    1
  )

  const monthSessions = sessions.filter((session) => {
    return new Date(session.date) >= startOfMonth
  })

  // Calculate total time
  const getTotalSeconds = (sessionList) => {
    return sessionList.reduce((total, session) => {
      return total + session.duration
    }, 0)
  }

  const todaySeconds = getTotalSeconds(todaySessions)
  const weekSeconds = getTotalSeconds(weekSessions)
  const monthSeconds = getTotalSeconds(monthSessions)

  // Convert seconds to hours and minutes
  const formatTime = (totalSeconds) => {

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)

    return `${hours}h ${minutes}m`
  }

  return (
    <section className="dashboard">

      <div className="dashboard-card">
        <h3>Today</h3>
        <p>{formatTime(todaySeconds)}</p>
      </div>

      <div className="dashboard-card">
        <h3>This Week</h3>
        <p>{formatTime(weekSeconds)}</p>
      </div>

      <div className="dashboard-card">
        <h3>This Month</h3>
        <p>{formatTime(monthSeconds)}</p>
      </div>

      <div className="dashboard-card">
        <h3>Sessions</h3>
        <p>{sessions.length}</p>
      </div>

    </section>
  )
}

export default Dashboard