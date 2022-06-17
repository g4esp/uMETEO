import LongCard from "./LongCard"
import { useEffect } from "react"

const Tomorrow = ({tomorrowfc, top}) => {
  let tomorrow = new Date()
  let temps = []
  tomorrowfc.forEach(snap => {
    temps.push(snap.main.temp)
  })
  useEffect(()=> {
    top.scrollTop = 0
  },[])
  return(
    <>
      <header className="px-3">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-4xl">Domani</h2>
          </div>
          <div>
            <h5 className="opacity-80 text-sm">
              {`${tomorrow.getDate() + 1} ${tomorrow.toLocaleString('it-IT', {'month': 'long'})}`}
            </h5>
          </div>
        </div>
        <div className="pb-4 flex justify-between items-baseline -mt-1">
          <h6 className="opacity-60 text-xs pl-1">
            Temp. max: {Math.round(Math.max(...temps))}° min: {Math.round(Math.min(...temps))}°
          </h6>
          <h2 className="text-2xl">{tomorrow.getFullYear()}</h2>
        </div>
      </header>
      <main className="mt-2">
        {tomorrowfc.map((snapshot)=> {
          return <LongCard key={snapshot.dt} {...snapshot} />
        })}
      </main>
    </>
  )
}
export default Tomorrow