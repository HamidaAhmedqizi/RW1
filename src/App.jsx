
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Navbar from './Components/Navbar'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import Gallery from './Pages/Gallery/Gallery'
import Home from './Pages/Home/Home'
import NotFound from './Pages/NotFound/NotFound'
import Plans from './Pages/Plans/Plans'
import Trainers from './Pages/Trainers/Trainers'

function App() {


  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Home />
      <About />
      <Gallery />
      <Contact />
      <NotFound />
      <Plans />
      <Trainers />
      </BrowserRouter>
      

    </div>


  )
}

export default App