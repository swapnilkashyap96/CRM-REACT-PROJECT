import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { setTaskHeading } from '../../Store/Slice/HeaderHeadingSlice'

function Settings() {
  const headerHeading = useSelector((state) => state.headerHeading.taskHeading)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(setTaskHeading('Settings'))
  }, [])
  return (
    <div>Settings</div>
  )
}

export default Settings