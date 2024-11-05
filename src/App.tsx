import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import PersonalProfile from './pages/PersonalProfile'
import Experience from './pages/Experience'
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<PersonalProfile />} />
          <Route path="/experience" element={<Experience />} />
        </Routes>
      </div>
    </Router>
  )
}

export default App
