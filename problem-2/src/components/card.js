import React, { useContext, useEffect, useState } from 'react'
import { cardContext } from '../App.js'

function Card({ color, handleChoice }) {

  const { selectedCards, setSelectedCards, matched } = useContext(cardContext);
  const [isCardVisible, setIsCardVisible] = useState(true);

  const selectCard = () => {
    handleChoice(color);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsCardVisible(false);
    }, 2000);
  }, []);

  return (
    <>
      <div className={isCardVisible ? 'card' : 'card back'} style={{ backgroundColor: color }} onClick={selectCard}></div>
    </>

  )
}

export default Card