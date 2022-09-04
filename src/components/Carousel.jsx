import PreCarousel from "./PreCarousel"
import SquareCard from "./SquareCard"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

const Carousel = ({forecast, setView}) => {
  const settings = {
    arrows: false,
    dots: false,
    infinite: false,
    slidesToShow: 3,
  }
  return(
    <>
      <PreCarousel setView={setView} />
      <Slider {...settings}>
        {forecast.length && forecast.map((item)=>{
          return <SquareCard key={item.dt} {...item}/>
        })}
      </Slider>
    </>
  )
}

export default Carousel