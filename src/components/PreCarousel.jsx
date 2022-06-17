const PreCarousel = ({setView}) => {
  return (
    <div className="my-4 px-[25px]">
      <div className="flex justify-between py-4">
        <h3 className="text-[#F2D121]">Prossime 24 ore</h3>
        <h3 className="opacity-80 font-light cursor-pointer" onClick={()=>{
          setView('tomorrow')
        }}>Domani</h3>
      </div>
    </div>
  )
}

export default PreCarousel