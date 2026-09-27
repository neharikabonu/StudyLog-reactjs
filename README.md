# StudyLog

*Live at: https://neharikabonu.github.io/StudyLog-reactjs/*

A simple and responsive **study time tracking web application** built with React.
StudyLog helps users track their study sessions, monitor study time, and maintain a history of their learning activities.

## Features

* Add a **subject and topic** before starting a study session
* ⏱Start, pause, and resume a study timer
* Finish a study session and automatically save it
* Disable the study form while a session is active
* Store study sessions using **Local Storage**
* Track:

  * Today's study time
  * This week's study time
  * This month's study time
  * Total number of study sessions
* View previous study sessions in **Study History**
* Data remains available after refreshing the page
* Responsive design for different screen sizes
* Dark, minimal UI using black, ash, off-white, beige, and muted brown tones

## Technologies Used

* **React.js**
* **JavaScript**
* **HTML5**
* **CSS3**
* **Vite**
* **Local Storage**

## Project Structure

```text
src/
│
├── components/
│   ├── Header/
│   │   ├── Header.jsx
│   │   └── Header.css
│   │
│   ├── Dashboard/
│   │   ├── Dashboard.jsx
│   │   └── Dashboard.css
│   │
│   ├── StudyForm/
│   │   ├── StudyForm.jsx
│   │   └── StudyForm.css
│   │
│   ├── StudyTimer/
│   │   ├── StudyTimer.jsx
│   │   └── StudyTimer.css
│   │
│   └── StudyHistory/
│       ├── StudyHistory.jsx
│       └── StudyHistory.css
│
├── App.jsx
├── App.css
└── index.css
```

## How It Works

### 1. Start a Session

Enter a subject and topic and click **Start Studying**.

The study form is cleared and disabled while the session is active.

### 2. Track Study Time

The timer starts automatically and allows you to:

* Pause the session
* Resume the session
* Finish the session

### 3. Save the Session

When a session is finished, StudyLog stores:

```text
Subject
Topic
Duration
Date
```

The session is saved in the browser's **Local Storage**, so it remains available after refreshing the page.

### 4. Dashboard

The dashboard calculates study time based on saved sessions:

```text
Today
This Week
This Month
Total Sessions
```

### 5. Study History

All completed study sessions are displayed in the Study History section with:

* Subject
* Topic
* Duration
* Date

## Future Improvements

Possible improvements for future versions:

* Edit study sessions
* Delete individual sessions
* Filter sessions by subject or date
* Add study goals
* Add weekly/monthly charts
* Export study history
* Add authentication and cloud storage

## Author

**Neharika Bonu**

B.Tech CSE Graduate | Frontend & Java Developer
