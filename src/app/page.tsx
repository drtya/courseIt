import { About, Course, Feedback, Home } from "@/component"


const Main = () => {
  return (
    <>
      <Home />
      <div className='empty_place'></div>
      <About />
      <div className='empty_place'></div>
      <Course />
      <div className='empty_place'></div>
      <Feedback />
      <div className='empty_place'></div>
    </>
  )
}

export default Main