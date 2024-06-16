import React from 'react'
const style={
    position: 'absolute',
    height: '10px',
    width: '10px',
    top:'20px'
}
export default function Portal({click=()=>{return},side='left',state='',newState='',visible}) {
  return (
    <div
    
    className="vertical-line left"
    onClick={click}
    style={{...style, backgroundColor: state ? 'yellow' : 'white', left:side==='left'?'-5px':'',right:side==='right'?'-5px':'',borderRadius:newState.width==='100'? '50px': '0',transition:'0.5s all ease',visibility:visible?'hidden':'' }}
></div>
  )
}
