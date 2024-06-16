import React from 'react'
import './button.css'
export default function EnableButton({enableloop=()=>{return},enable=''}) {
  return (
    <button className='e-button' onClick={enableloop}>{ enable?'Enable Portal Mapping' : 'Disable Portal Mapping' }</button>

  )
}
