import { useState } from 'react'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import MainLayout from './layout/MainLayout'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'
import ProtectedRoute from './routes/ProtectedRoute'
import LoginPage from './pages/LoginPage'

function App() {

  return (
    <Routes>
      <Route path='/' element={<MainLayout />} >
        <Route index element={<HomePage />} />
        <Route path='about' element={<ProtectedRoute><AboutPage /></ProtectedRoute>} />
        <Route path='contact' element={<ProtectedRoute><ContactPage /></ProtectedRoute>} />
        <Route path='login' element={<LoginPage />} />
      </Route>

    </Routes>
  )
}

export default App


