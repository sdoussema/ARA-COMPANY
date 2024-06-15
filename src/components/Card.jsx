

// eslint-disable-next-line react/prop-types
function Card({title , body ,logo}) {
    return (
    <>
        <div className='flex flex-col items-center justify-center w-[300px] h-[250px] md:w-[400px] md:h-[250px] border m-3 p-4 mt-0 sm:mt-10 rounded-xl shadow-lg overflow-hidden transform transition-transform duration-300 ease-out hover:scale-105 hover:bg-gradient-to-tr from-slate-50 via-gray-50 to-slate-50 '>
            <div className=' text-indigo-800  m-3 '>
                {logo }
            </div>
            <div className='text-lg mb-1 sm:text-3xl tracking-blod text-black'>
                 <h1>{title}</h1>
            </div>
            <div className=' text-xs sm:text-xg text-neutral-500 max-w-4xl'>
                <p>{body}</p>
            </div>
    
    
    </div>
    </>
    )
  }

export default Card