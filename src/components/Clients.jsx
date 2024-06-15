import logo1 from "../assets/COFICAB.png"
import logo2 from "../assets/logo-techam.png"
import logo3 from "../assets/mawassir.jpeg"
import logo4 from "../assets/centre-national-pedagogique.png"


function Clients() {
    return(
    <div className='flex flex-col justify-center items-center my-6 '>
        <h1 className="text-4xl sm:text-5xl lg:text-7xl tracking-wide text-gray-900">Our Clients</h1>
        <p className="my-5 text-xs sm:text-lg  text-neutral-500 max-w-4xl p-2 text-center ">Trusted by Leading Companies . Our app has been embraced by industry leaders across various sectors, and we are honored to have their trust and support.</p>
        <div className='flex flex-row justify-center items-center '>
        <img className="w-[100px] h-[50px] m-2 sm:w-[200px] sm:h-[70px] "  src={logo1} alt="image1" href=""/>
        <img className="w-[100px] h-[50px] m-2 sm:w-[200px] sm:h-[70px] " src={logo2} alt="image1" href=""/>
        <img className="w-[100px] h-[50px] m-2 sm:w-[200px] sm:h-[70px] " src={logo3} alt="image1" href=""/>
        <img className="w-[100px] h-[50px] m-2 sm:w-[200px] sm:h-[70px] " src={logo4} alt="image1" href=""/>

        </div>
    </div>
    )
}

export default Clients