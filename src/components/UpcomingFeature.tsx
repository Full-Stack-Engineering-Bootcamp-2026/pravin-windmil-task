import React from 'react'
import { IoSparkles } from "react-icons/io5";

function UpcomingFeature({ title}:{title:string}) {
  return (
    <div className=' flex gap-4 '>
         <IoSparkles className=' text-primary size-20'/>
         <div className='flex flex-col justify-center'>
            <h2 className=' text-base  font-semibold  text-foreground'> {title} </h2>
             <p className='text-sm font-medium text-muted-foreground'>This feature is currently in development and will be available soon. </p>
         </div> 
         

        
    </div>
  )
}

export default UpcomingFeature