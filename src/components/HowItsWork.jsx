import image1 from '../assets/Ellipse 528.png'
import image2 from '../assets/Ellipse 529.png'


function HowItsWork() {
    return (
        <>
        <div className=" flex-row  justify-center  bg-slate-300 mt-[50px] sm:my-2 sm:mb-24 " >
            <div className="container flex items-center justify-center ">
            <div className="flex items-center justify-center w-[200px] h-[200px] border-b border-r sm:w-[500px] sm:h-[400px] ">
            <img className='w-[170px] h-[170px] sm:w-[300px] sm:h-[300px]' src={image1} alt="" />
            </div>
            <div className="flex flex-col items-center justify-center p-5 w-[200px] h-[200px] border-b sm:w-[500px] sm:h-[400px] ">
            <h1 className="text-2xl sm:text-5xl sm:ml-20 tracking-wide text-black">System</h1>
            <p className=" text-[10px] sm:text-lg sm:ml-20  text-neutral-500 max-w-4xl text-center  ">
            we provide a system equip in your machines capability to send information effectively, ensuring you have all the data you need at your fingertips.            </p>
            </div>
            </div>
            <div className="flex items-center justify-center ">
            <div className="flex flex-col items-center justify-center w-[200px] h-[200px]  border-r sm:w-[500px] sm:h-[400px] text-center ">
        
            <h1 className="text-2xl sm:text-5xl sm:mr-1  tracking-wide text-black">What offers our app</h1>
            <p className=" text-[10px] sm:text-lg sm:mr-15  text-neutral-500 max-w-4xl text-center  ">
            Our app offers real-time data tracking to monitor your operations, customizable dashboards tailored to your needs, seamless integration with existing systems, comprehensive reporting for informed decision-making, and a user-friendly interface for easy navigation.</p>            </div>
            <div className="flex items-center justify-center w-[200px] h-[200px] sm:w-[500px] sm:h-[400px] ">
            <img className='w-[170px] h-[170px] sm:w-[300px] sm:h-[300px]' src={image2} alt="" />
            </div>
            </div>
        </div>
        </>
      )
}

export default HowItsWork