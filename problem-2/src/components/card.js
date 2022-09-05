import React, { useEffect, useState } from 'react'

function Card({ card, handleChoice, show, firstShow, wrong }) {

  const selectCard = () => {
    handleChoice(card);
  }

  return (
    <>
      <div className="card" onClick={selectCard}>
        <div className={(show || firstShow) ? 'show' : ''}>
          <div className={(show ? (wrong ? 'wrong' : 'selected') :'front') } style={{ backgroundColor: card.color }}></div>
          <div className='back'></div>
        </div>
      </div>
    </>

  )
}

export default Card