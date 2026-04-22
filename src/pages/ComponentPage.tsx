import UpcomingFeature from "@/components/UpcomingFeature";
import { useEffect, type ReactElement } from "react";
import { useNavigate } from "react-router-dom";



export function ComponentPage({ title, description,preview }: { title:string, description?:string ,preview?:React.ReactNode}) {
  
 const navigate = useNavigate();

    useEffect(()=>{

      
    },[])

    if(preview == null){
        return <UpcomingFeature title={title}/>
    }

  return (
    <div>
           
      <h1 className=" text-xl font-semibold py-2 ">{title}</h1>
      <p>{description}</p>

      {preview}

      
    </div>
  )
}