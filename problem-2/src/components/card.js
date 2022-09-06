import React, { useEffect, useState } from 'react'

function Card({ card, handleChoice, show, firstShow, wrong, right, notAvailable }) {

  const [hover, setHover] = useState(false);
  const [isRight, setIsRight] = useState(false);

  const selectCard = () => {
    handleChoice(card);
    setHover(false);
  };

  useEffect(() => {
    setTimeout(() => {
      setIsRight(right);
    }, 400);
  }, [right]);

  useEffect(() => {
    if (firstShow) {
      setHover(false);
    }
  },[firstShow])

  return (
    <>
      <div className="card" onClick={selectCard} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}>
        <div className={(show || firstShow) ? 'show' : ''}>
          <div className={(show ? (wrong ? 'wrong' : (isRight ? 'right' : 'selected')) :'front') } style={{ backgroundColor: card.color }}></div>
          <div className={hover ? (notAvailable ? 'back' : 'back hover') : 'back'}></div>
        </div>
      </div>
    </>

  )
}

export default Card