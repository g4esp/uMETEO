import Pin from "../assets/pin.svg"

const Current = ({current, temps}) => {

  const max = Math.max(...temps)
  const min = Math.min(...temps)

  const today = {
    hh: new Date().getHours(),
    mm: new Date().getMinutes(),
    formatDigits(n) {
      return "0" + n.toString() // => 015
    }, 
    getDay() {
      return new Date().toLocaleString('it-IT', {'month': 'long', 'day': '2-digit'}) // => 15 giugno
    },
    getTime() {
      return `${this.formatDigits(this.hh).slice(-2)}:${this.formatDigits(this.mm).slice(-2)}` // => 08:42
    },
    giveMeTheString() {
      return `${this.getDay()}, ${this.getTime()}` // => 15 giugno, 08:42
    }
  }

  return(
    <div className="current">
      <div className="flex justify-between items-center py-4">
        <div>
          <h2 className="text-4xl">Oggi</h2>
        </div>
        <div>
          <h5 className="opacity-80 text-sm">
            {`${today.giveMeTheString()}`}
          </h5>
        </div>
      </div>
      <div className="flex justify-between items-center py-4">
        <div>
          <img className="max-w-[125px]" src={`/icons/${current.weather[0].icon}.png`} alt="Current weather" />
        </div>
        <div className="text-[80px]">
          {Math.round(current.main.temp)}<span className="text-[#F2D121] font-light">°<sup className="text-[60%]">c</sup></span>
        </div>
      </div>
      <div className="flex justify-between items-center py-4 opacity-80 text-sm">
        <div>
          <h5>
            {current.weather[0].description.charAt(0).toUpperCase() + current.weather[0].description.slice(1)}
          </h5>
        </div>
        <div>
          <h5>max: {Math.round(max)}° min: {Math.round(min)}°</h5>
        </div>
      </div>
      <div className="py-4">
        <h5><img src={Pin} alt="location" className="inline mr-2 align-middle" /> {current.name}, {current.sys.country}</h5>
      </div>
      <div className="grid grid-cols-3 gap-2 py-4">
        <div className="text-center">
          <h5 className="text-xl">{current.visibility / 1000}km</h5>
          <p className="opacity-80 text-sm">Visibilità</p>
        </div>
        <div className="text-center">
          <h5 className="text-xl">{current.main.humidity}%</h5>
          <p className="opacity-80 text-sm">Umidità</p>
        </div>
        <div className="text-center">
          <h5 className="text-xl">{current.wind.speed}m/s</h5>
          <p className="opacity-80 text-sm">Vento</p>
        </div>
      </div>
    </div>
  )
}
export default Current