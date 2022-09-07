import React, { useContext } from 'react'
import spongeBob from '../assets/spongeBob.gif'
import confetti from '../assets/confetti.gif'
import { GameContext } from '../App.js'

function Modal() {

    const setPlayAgain = useContext(GameContext);

    const playAgain = () => {
        setPlayAgain(true);
    }

    return (
        <div className='modal'>
            <img className='spongeBob' src={spongeBob} alt="" />
            <img className='confetti' src={confetti} alt="" />
            <button className='btn-playAgain' onClick={playAgain}>Play Again</button>
        </div>
    )
}

export default Modal