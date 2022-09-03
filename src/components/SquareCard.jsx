
const SquareCard = ({dt_txt, main, weather}) => {
  return (
    <article className="bg-gradient-to-b from-[#360F7C] to-[#621085] rounded-2xl p-3 max-w-[110px] max-h-[110px]">
      <div className="flex justify-between">
        <div>
          <img src={`/icons/${weather[0].icon}.png`} alt="Weather icon" className="max-w-[53px]" />
        </div>
        <div className="self-end">
          <h6 className="opacity-60 text-xs">{new Date(dt_txt).toLocaleTimeString().slice(0,5)}</h6>
        </div>
      </div>
      <div className="text-right mt-1">
        <h3 className="text-2xl">{Math.round(main.temp)}°c</h3>
      </div>
    </article>
  )
}
export default SquareCard