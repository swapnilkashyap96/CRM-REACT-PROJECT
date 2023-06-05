import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'

function Deals() {
  const headerHeading=useSelector((state)=>state.headerHeading.taskHeading)
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setTaskHeading('Deals'))
    },[])
  return (
    <div>Deals</div>
  )
}

export default Deals