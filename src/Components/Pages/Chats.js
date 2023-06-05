import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'

function Chats() {
    const dispatch=useDispatch()
    useEffect(()=>{
        dispatch(setTaskHeading('Chats'))
    },[])
  return (
    <div>Chats</div>
  )
}

export default Chats