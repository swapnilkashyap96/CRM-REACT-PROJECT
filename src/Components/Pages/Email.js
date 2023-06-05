import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'

function Email() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setTaskHeading('Email'))
    },[])
  return (
    <div>Email</div>
  )
}

export default Email