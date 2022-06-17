import PreCarousel from "./PreCarousel"
import SquareCard from "./SquareCard"
import HorizontalScroll from "react-scroll-horizontal"

const Carousel = ({forecast, setView}) => {
  // const filteredStamps = forecast.filter((item)=>{
  //   return (new Date(item.dt*1000).getDate() === new Date().getDate())
  // })
  // console.log(filteredStamps)
  return(
    <>
      <PreCarousel setView={setView} />
      <HorizontalScroll reverseScroll style={{height: "125px"}} className={"!overflow-x-scroll md:!overflow-x-hidden"}>
        {forecast.length && forecast.map((item)=>{
          return <SquareCard key={item.dt} {...item}/>
        })}
      </HorizontalScroll>
    </>
  )
}

export default Carousel