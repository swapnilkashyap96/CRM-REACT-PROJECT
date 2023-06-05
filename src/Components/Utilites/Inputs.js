import React from 'react'

function Inputs(props) {
  return (
    <>
        <input defaultValue={props.defaultValue} name={props.name} type={props.type} onChange={(e)=>{props.handlerInput(e)}} placeholder={props.placeholder} className={props.className}></input>
    </>
  )
}

export default Inputs