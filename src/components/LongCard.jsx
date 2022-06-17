import temp from "../assets/temp.svg"
import rain from "../assets/rain.svg"
import hum from "../assets/hum.svg"
import win from "../assets/wind.svg"

const LongCard = ({dt_txt, main, weather, pop, wind}) => {
  return (
    <article className="bg-gradient-to-b from-[#360F7C] to-[#621085] rounded-2xl w-full h-[100px] p-3 mb-[15px] relative">
      <div className="flex justify-between items-center w-full h-full">
        <div>
          <img src={`/icons/${weather[0].icon}.png`} alt="Weather" className="max-w-[65px] block" />
          <p className="text-xs opacity-60">{weather[0].description.charAt(0).toUpperCase() + weather[0].description.slice(1)}</p>
        </div>
        <div className="text-right">
          <h6 className="text-3xl">{new Date(dt_txt).toLocaleTimeString().slice(0,5)}</h6>
          <h3 className="text-right">
            <img className="max-w-[14px] h-auto align-baseline inline text-lg opacity-80" src={temp} alt="temperature"/> {Math.round(main.temp)}<span className="text-[#F2D121]">°c</span>
          </h3>
          <h4 className="flex text-xs opacity-50 items-center">
            { pop >= 0.1 &&
              <><img className="max-w-[12px] mr-1" src={rain} alt="PoP"/> <span className="mr-3">{Math.round(pop * 100)}%</span></>
            }
            <img className="max-w-[9px] mr-1" src={hum} alt="humidity"/> <span className="mr-2">{main.humidity}%</span>
            <img className="max-w-[11px] mr-1" src={win} alt="wind"/> {wind.speed}m/s
          </h4>
        </div>
      </div>
    </article>
  )
}
export default LongCard