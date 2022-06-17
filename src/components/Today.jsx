import Current from "./Current"
import Carousel from "./Carousel"

const Today = ({current, forecast, setView, temps}) => {
  return(
    <>
      <Current current={current} temps={temps}/>
      <Carousel forecast={forecast} setView={setView}/>
    </>
  )
}

export default Today