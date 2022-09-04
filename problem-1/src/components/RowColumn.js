import React from 'react'

function RowColumn({ color, height, width, className }) {
  
  return (
  
    <div className={className} style={{ backgroundColor: color, height: height, width: width }}></div>
  )
}

export default RowColumn