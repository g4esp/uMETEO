import settings from "../assets/settings.svg"
import back from "../assets/back.svg"

const Topbar = ({view, setView}) => {
  return(
    <div className="flex items-center p-[25px] my-4">
      <div 
        className={`w-1/3${view === "tomorrow" ? " cursor-pointer": ""}`}
        {...(view==='tomorrow' && {onClick: () => {
          setView('today')
        }})}
      >
        <img src={view === 'today' ? settings : back} alt={view === 'today' ? "settings" : "back"} />
      </div>
      <h1 className="w-1/3 text-center">uMETEO</h1>
    </div>
  )
}
export default Topbar