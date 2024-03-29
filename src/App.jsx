import React from 'react'
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from 'react-router-dom'
import Photo from './components/Photo.jsx'
import PhotoInfo from './components/PhotoInfo.jsx'
import './style.css'
import data from './photo.json'

function RandomRedirect() {
  const randomIndex = Math.floor(Math.random() * data.length) + 1
  return <Navigate to={`/photos/${randomIndex}`} />
}

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<RandomRedirect />} />
        <Route path="/photos/:id" element={<Photo data={data} />} />
        <Route path="/info/photos/:id" element={<PhotoInfo data={data} />} />
      </Routes>
    </Router>
  )
}

export default App
