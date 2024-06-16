import React from 'react'
import './portals.css'
export default function Container({children}) {

  
  return (
    <div className="rectangular-surface">
        {children}
        </div>
  )
}
