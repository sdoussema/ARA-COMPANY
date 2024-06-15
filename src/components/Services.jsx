import Card from "./Card"
import { LineChart,Layers3,FolderKanban } from 'lucide-react';


function Services() {
    return (
      
    <>
        

        <div className='flex flex-col items-center justify-center my-6 sm:my-1 h-[70vh] mt-20 sm:mt-0   '>
        <h1 className="text-4xl m-5 sm:text-5xl lg:text-7xl tracking-wide text-gray-900">Our Services</h1>
        <div className="flex flex-col sm:flex-row items-center justify-center">
            <Card
            logo= {<Layers3 size={32} strokeWidth={3} />}
            title ='Industrial Performance' 
            body ='We help industries achieve operational excellence by improving resource utilization and production capacity.Improvement of resource exploitation and production capacities.Optimization of flows and storage space utilization.Development of skills and implementation of best practices and lean thinking.   '
            />  
            <Card
            logo= {<LineChart size={40} strokeWidth={3} />}
            title ='Industry 4.0 and MES' 
            body ='Facilitating the transition to Industry 4.0 with robust solutions for real-time data acquisition and performance visualization.Real-time production data acquisition and performance indicators visualization.Analysis and reliability of operational dashboards.Development of MES solutions and real-time digital acquisition systems.'
            />
            <Card
            logo= {<FolderKanban size={32} strokeWidth={3} />}
            title ='Strategic Management' 
            body ='Support for strategic management and organizational restructuring to achieve efficiency and effectiveness.Strategy and management style analysis.Assistance in organizational and functional restructuring.Strategic objectives alignment and re-engineering.'
            />
        </div>
        </div>
        
        </>
      )
}

export default Services