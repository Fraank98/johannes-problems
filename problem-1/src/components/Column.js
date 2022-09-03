import React from 'react'
import RowColumn from './RowColumn'

function Column({ randomColor, width, column3 }) {

  return (

    <div className={column3 ? "column-3-row" : "column-2-row"}>
      {
        randomColor.map((color, i) => {
          return <RowColumn color={color} width={width} key={i} />
        })
      }
    </div>
    )
}

export default Column