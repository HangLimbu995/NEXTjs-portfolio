import { Outlet } from 'react-router-dom'
import './App.css'
import Footer from './components/Footer'
import GoToTop from './components/GoToTop'
import Navbar from './components/Navbar'
import TopContact from './components/TopContact'
import Home from './pages/Home'

function App() {

  return (
    <div className='relative w-full h-full overflow-x-hidden'>
      <TopContact />
      <Navbar />
      <div className='main w-full h-full'>
        <Outlet />
      </div>
      <GoToTop />
      <Footer />
    </div>
  )
}

export default App
