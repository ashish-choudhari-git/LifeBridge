import './App.css'
import Navbar from './components/Navbar/Navbar'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Availability from './pages/Availability/Availability.jsx'
import Donate from './pages/Donate/Donate.jsx'


function App() {
  return (
    <>
      <Navbar />

      <div style={{ paddingTop: '4rem' }}>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/availability" element={<Availability />}></Route>
          <Route path="/donate" element={<Donate />}></Route>
          {/* <Route path="/Bank" element={<Donate />}></Route> */}


        </Routes>
      </div>

    </>
  )
}

export default App
