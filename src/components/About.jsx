import img from '../assets/Featured-img.jpg'
function About() {
  return (
    <>
    
    <div className="flex flex-col sm:flex-row items-center justify-center my-6 h-screen   ">
        <div>
            <img src={img} alt="" />
        </div>
        <div className="flex-col justify-center text-center items-center my-6 mx-6 p-3 ">
            <h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-wide   text-gray-900">About US</h1>
            <p className="mt-10 text-xs sm:text-lg  text-neutral-500 max-w-4xl   ">
            Created in 2020, ARA Consulting is a consulting, engineering and continuing training company focused on management, operational excellence and industrial support. Indeed, the industrial consulting activity consists of assistance in the organization and optimization of its industrial and logistics tools. Practically, ARA consultants support manufacturers in the design of new systems, or in improving their operational performance.            </p>
        </div>
    </div>
    </>
  )
}

export default About