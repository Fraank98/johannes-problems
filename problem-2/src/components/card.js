import React, { useContext, useEffect, useState } from 'react'
import { cardContext } from '../App.js'

function Card({ color }) {

  const { selectedCards, setSelectedCards, matched } = useContext(cardContext);
  const [isCardVisible, setIsCardVisible] = useState(true);

  const selectCard = () => {
    setSelectedCards([...selectedCards, color]);
    setIsCardVisible(true);
  }

  useEffect(() => {
    setTimeout(() => {
      setIsCardVisible(false);
    }, 3000);
  }, []);

  return (
    <>
      <div className={isCardVisible ? 'card' : 'card back'} style={{ backgroundColor: color }} onClick={selectCard}></div>
    </>

  )
}

export default Card