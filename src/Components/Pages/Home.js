import React, { useEffect } from 'react'

import { useDispatch, useSelector } from 'react-redux'
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'
function Home() {
  const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setTaskHeading('Dashboard'))
    },[])
   
  return (
    <>
       
      </>
  )
}

export default Home