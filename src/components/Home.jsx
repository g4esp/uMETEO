import splash from "../assets/splash.svg"
const Home = () => {

  return(
    <>
      <div className="current">
        <div className="pt-5 pb-4">
          <h1 className="text-center text-5xl">uMETEO</h1>
        </div>
        <div className="py-4">
          <img src={splash} alt="uMETEO" />
        </div>
      </div>
      <div className="pt-3 max-w-[275px] mx-auto text-center block my-4">
        <h5 className="text-sm">
          Per il corretto funzionamento di questa webapp è necessario fornire al browser il consenso alla geolocalizzazione
        </h5>
        <button className="mt-3 mb-1 bg-transparent rounded-xl border-[#F2D121] px-4 py-2 text-[#F2D121] border text-sm">
          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-[#F2D121] inline" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
          </svg>
          Ok, capito
        </button>
      </div>

    </>
  ) 
}

export default Home