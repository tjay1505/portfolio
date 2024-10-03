import { useEffect, useState } from 'react'
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import Header from './compo/Header'
import Skill from './compo/Skill'
import Landing from './compo/Landing'
import Project from './compo/Project'
import Sliding from './compo/Sliding'
import Footer from './compo/Footer'
import Exprience from './compo/Exprience'
import Freelance from './compo/Freelance'
import SkillAnime from './compo/SkillAnime'
import Aos from 'aos'
import 'aos/dist/aos.css'


function App() {
  const [mode, setMode] = useState('dark')
  const [alti,setalti] = useState(true)

  useEffect(() => {
    Aos.init({duration:1000})
  },[])

  const toggleMode = () => {
    alti ? setMode("light") : setMode("dark");
    setalti(!alti)
  }

  return (
      <div className=' container-fulid jk-cont ' mode ={mode} >
        <Header mode={mode} alti={alti} setMode={setMode} toggleMode={toggleMode} />
        <Landing/>
        <SkillAnime/>
        <Freelance/>
        <Skill/>
        <Exprience/>
        <Project/>
        <Sliding/>
        <Footer/>
      </div>
  )
}

export default App
