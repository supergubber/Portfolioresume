import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Homepage from './Pages/Home/Homepage'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Portfolio from './Pages/Portfolio/Portfolio'
import Themes from './components/Themes'
import Navbar from './components/Navbar'
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Themes />
      <Routes>
        <Route index element={<Homepage />} />
        <Route path='about' element={<About />} />
        <Route path='contact' element={<Contact />} />
        <Route path='portfolio' element={<Portfolio />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
