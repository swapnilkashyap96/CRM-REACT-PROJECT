import React from 'react'

function ButtonAction(props) {
  return (
    <>
        <button type={props.type} onClick={(e)=>{props.handlerSubmit(e)}} className={props.className} >{props.value}</button>
    </>
  )
}

export default ButtonAction