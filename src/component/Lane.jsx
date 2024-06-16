import React from 'react'

export default function Lane({newState,visible}) {

  return (
    <>
    

    {newState.stat && (
        <div
            style={{
                border: newState.width==='100'? '2px solid yellow': '2px solid white',
                width: `${newState.width}%`,
                position: 'absolute',
                borderRadius:newState.width==='100'? '50px': '0',
                left: '50%',
                top: '50%',
                transition: 'all 0.3s ease',
                transform: 'translate(-50%, -50%)',
                visibility:visible?'hidden':''
            }}
        >

        </div>)}
        </>
    
        )
        }

  

