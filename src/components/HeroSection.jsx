import image from '../assets/Group 427319168.png'

const HeroSection = () => {
  return (
    <div className="flex flex-col sm:flex-row items-center  h-screen sm:h-screen bg-gradient-to-tr from-yellow-100 to-violet-100  ">
        <div className='ml-10 p-3 sm:w-[700px] '>
      <h1 className="text-4xl sm:text-5xl  tracking-wide">
      Driving Excellence in Industrial Management and Engineering
      </h1>
      <p className="mt-10 text-xs sm:text-lg  text-neutral-500 max-w-4xl  ">
      ARA Consulting specializes in industrial management, operational excellence, and continuous training.
      </p>
      <p className=' my-6  text-lg  text-neutral-500 max-w-4xl border-b border-black-700/80 w-[270px]'>Aracompany@aracompany.com 
      </p>
         </div>
         <div className=''>
            <img  className='' src={image} alt=""  />
         </div>

     
    </div>
  );
};

export default HeroSection;