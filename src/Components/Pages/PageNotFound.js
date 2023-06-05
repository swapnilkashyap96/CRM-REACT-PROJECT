import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'

function PageNotFound() {

    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setTaskHeading('404'))
    },[])
  return (
    <>
        This Page Not Found
    </>
  )
}

export default PageNotFound