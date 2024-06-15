const people = [
    {
        name: 'Ibea BenZid',
        role: 'Co-Founder / CEO',
        imageUrl:'https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/320733466_733076881741087_5155402892974930189_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=hKG2XqCLUiYQ7kNvgFfzHXX&_nc_ht=scontent.ftun7-1.fna&oh=00_AYBuOPhsbk_Y-5mJB-JimgPiz79221slhN4N9ZdOvaetvw&oe=66730A91'
      },
      {
        name: 'Leslie Alexander',
        role: 'Co-Founder / CEO',
        imageUrl:
          'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
      },
      {
        name: 'Saadaoui Oussama',
        role: 'Co-Founder / CEO',
        imageUrl:'https://scontent.ftun7-1.fna.fbcdn.net/v/t39.30808-6/328538529_465146589162792_7216734847902921439_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Rq_0HRJgKcoQ7kNvgF-Zj92&_nc_ht=scontent.ftun7-1.fna&oh=00_AYDaLyO7uNAeYCIv0cip_Z6hNSkonJRQyrXg4ENBnaf5ZQ&oe=6672DD1D'
      },
    // More people...
  ]
  
  export default function OurTeam() {
    return (
      <div className="bg-white py-24  sm:py-34">
        <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
          <div className="max-w-2xl">
            <h2 className="text-3xl tracking-wide text-gray-900 sm:text-4xl">Meet our leadership</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
            Welcome to our Tech Innovation Team! We are experts in web development, IoT design, and data analytics, dedicated to delivering cutting-edge solutions.
            </p>
          </div>
          <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
            {people.map((person) => (
              <li key={person.name}>
                <div className="flex items-center gap-x-6">
                  <img className="h-16 w-16 rounded-full" src={person.imageUrl} alt="" />
                  <div>
                    <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                    <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
  