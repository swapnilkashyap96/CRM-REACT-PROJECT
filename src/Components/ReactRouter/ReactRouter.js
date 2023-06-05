import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Chats from '../Pages/Chats'
import Contacts from '../Pages/Contacts'
import Dashboard from '../Pages/Dashboard'
import Deals from '../Pages/Deals'
import Email from '../Pages/Email'
import PageNotFound from '../Pages/PageNotFound'
import Settings from '../Pages/Settings'
import Tasks from '../Pages/Tasks'

function ReactRouter() {
  return (
    <>
        <Routes path='/' element={<Dashboard/>}>
            
            <Route path='/tasks' element={<Tasks/>}></Route>
            <Route path='/deals' element={<Deals/>}></Route>
            <Route path='/contacts'element={<Contacts/>}></Route>
            <Route path='/chats' element={<Chats/>}></Route>
            <Route path='/email' element={<Email/>}></Route>
            <Route path='/settings' element={<Settings/>}></Route>
            {/* <Route path='*' element={<PageNotFound/>}></Route> */}
        </Routes>
    </>
  )
}

export default ReactRouter