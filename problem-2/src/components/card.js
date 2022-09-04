import React, { useContext, useEffect, useState } from 'react'

function Card({ card, handleChoice, show, firstShow }) {

  const selectCard = () => {
    handleChoice(card);
  }

  return (
    <>
      <div className={(show || firstShow) ? 'card' : 'card back'} style={{ backgroundColor: card.color }} onClick={selectCard}></div>
    </>

  )
}

export default Card