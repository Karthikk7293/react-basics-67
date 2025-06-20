import { useState } from 'react'
import './App.css'
import HomePage from './pages/HomePage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import Button from './components/Button'

function App() {
  const [count, setCount] = useState(0)
  const [count1, setCount1] = useState(0)
  const [count2, setCount2] = useState(0)
  const [count3, setCount3] = useState(0)
  const [showPage, setShowPage] = useState("home")


  return (
    <>
      <div>
        <Button handleClick={setCount} setShowPage={setShowPage} page={"home"}  >
          show home
        </Button>
        {showPage === 'home' && <HomePage />}
        {showPage === 'about' && <AboutPage />}
        {showPage === 'contact' && <ContactPage />}
      </div>
    </>
  )
}

export default App


