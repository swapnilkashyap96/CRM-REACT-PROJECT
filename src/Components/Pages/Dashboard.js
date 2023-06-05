import React, { useEffect } from 'react'
import { BrowserRouter } from 'react-router-dom'
import ReactRouter from '../ReactRouter/ReactRouter'
import Home from './Home'
import SideBar from './SideBar'

function Dashboard() {
   
    return (
        <div>

            <BrowserRouter>

                <div className='container-fluid'>

                    <SideBar />
                    <Home />


                    <>
                        <ReactRouter />
                    </>

                </div>

            </BrowserRouter>
        </div>
    )
}

export default Dashboard