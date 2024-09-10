import './App.css'
import Navbar from './components/Navbar'
import TopContact from './components/TopContact'
import Home from './pages/Home'

function App() {

  return (
    <div className='relative w-full h-full bg-red-900'>
    <TopContact />
  <Navbar />
  <Home />
    </div>
  )
}

export default App
