import HomeLayout from '@/components/layout/HomeLayout'
import Feed from '@/pages/Feed'
import Home from '@/pages/Home'
import React from 'react'

import {BrowserRouter, Route, Routes} from "react-router-dom"
function AppRouter() {
  return (
    <>

    <BrowserRouter>
    
            <Routes   >


                    <Route element = { <HomeLayout/>}>
                      
                      <Route index element  = {<Home/>}/>

                      <Route path='/list' element  ={ <Feed/>}/>
                    
                    </Route>


            </Routes>
    
    </BrowserRouter>
        
        
    </>
  )
}

export default AppRouter