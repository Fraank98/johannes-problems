import React, { useContext} from 'react'
import gif from '../assets/spongeBob.gif'
import {GameContext} from '../App.js'

function Modal() {

    const setPlayAgain = useContext( GameContext );

    const playAgain = () => {
        setPlayAgain(true);
    }

    return (
        <div className='modal'>
            <img className='modal-content' src={gif} alt="" />
            <button className='btn-playAgain' onClick={playAgain}>Play Again</button>
        </div>
    )
}

export default Modal