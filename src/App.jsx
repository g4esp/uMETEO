import { useState, useEffect, useRef } from "react"

import Topbar from "./components/Topbar"
import Home from "./components/Home"
import Today from "./components/Today"
import Tomorrow from "./components/Tomorrow"
import { Transition } from "@headlessui/react"

// const appid = import.meta.env.VITE_APP_ID
const appid = process.env.VITE_APP_ID || import.meta.env.VITE_APP_ID
// const appid = "9d80cddf8c01893b2fc8d8a417227284"

const api = `https://api.openweathermap.org/data/2.5/`
const params = `lang=it&units=metric`

const App = () => {
  
  const [isLoading, setIsLoading] = useState(true)
  const [view, setView] = useState('today')
  const [location, setLocation] = useState()
  const [current, setCurrent] = useState({})
  const [forecast, setForecast] = useState({})
  const [tomorrow, setTomorrow] = useState()
  const [temps, setTemps] = useState([])
  const top = useRef()
  
  const getPosition = () => {
    try {
      navigator.geolocation.getCurrentPosition((pos) => {
        setLocation({
          lat: pos.coords.latitude,
          lon: pos.coords.longitude
        })
      })
    } catch (error) {
      console.log(":( error getting geolocation", error)
    }
  }

  const getCurrentWeather = async () => {
    setIsLoading(true)
    try {
      const req =  await fetch(`${api}weather?lat=${location.lat}&lon=${location.lon}&appid=${appid}&${params}`)
      const res = await req.json()
      setCurrent(res)
    } catch (error) {
      setIsLoading(false)
      console.log(':( error fetching weather', error)
    }
  }

  const getForecast = async () => {
    setIsLoading(true)
    let tempsArray = []
    let limit = 8
    try {
      const req =  await fetch(`${api}forecast?lat=${location.lat}&lon=${location.lon}&appid=${appid}&${params}`)
      const res = await req.json()
      for (let i = 0; i < limit; i++) {
        tempsArray.push(res.list[i].main.temp)
      }
      setForecast(res.list.filter((i, index)=>{
        return (res.list.indexOf(res.list[index]) < limit)
      }))
      setTomorrow(res.list.filter((item)=>{
        return (new Date(item.dt * 1000).getDate() === new Date().getDate() + 1)
      }))
      setTemps(tempsArray)
      setIsLoading(false)
    } catch (error) {
      setIsLoading(false)
      console.log(':( error fetching forecast', error)
    }
  }

  useEffect(()=> {
    getPosition()
  },[])

  useEffect(()=>{
    if (!location) return
    getCurrentWeather()
    getForecast()
  },[location])
  
  return (
    <div className="wrapper" ref={top}>
      
      <Topbar view={view} setView={setView} />
      
      <Transition
        appear={true}
        show={isLoading}
        enter="transition-opacity duration-300"
        enterFrom="opacity-0"
        enterTo="opacity-100"
        leave="transition-opacity duration-400"
        leaveFrom="opacity-100"
        leaveTo="opacity-0"
      >
        <Home />
      </Transition>

      <Transition
        appear={true}
        show={!isLoading && view === 'today'}
        enter="transition ease-in-out duration-600 transform opacity"
        enterFrom="-translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-in-out duration-600 transform opacity"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="-translate-x-full opacity-0"
      >
        <Today current={current} forecast={forecast} temps={temps} setView={setView} />
      </Transition>

      <Transition
        show={!isLoading && view==='tomorrow'}
        enter="transition ease-in-out duration-600 transform opacity"
        enterFrom="translate-x-full opacity-0"
        enterTo="translate-x-0 opacity-100"
        leave="transition ease-in-out duration-600 transform opacity"
        leaveFrom="translate-x-0 opacity-100"
        leaveTo="translate-x-full opacity-0"
      >
        <Tomorrow tomorrowfc={tomorrow} top={top.current}/>
      </Transition>
      
    </div>
  )
}

export default App