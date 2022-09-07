import './App.css';
import { createContext, useEffect, useState } from 'react'
import Card from './components/Card.js'
import Modal from './components/Modal';
import { shuffle } from './utils/shuffle.js'

export const GameContext = createContext()

function App() {

  const [cards, setCards] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [firstShow, setFirstShow] = useState(false);
  const [count, setCount] = useState(0);
  const [notAvailable, setNotAvailable] = useState(true);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [playAgain, setPlayAgain] = useState(false);

  useEffect(() => {
    const getRandomColor = () => {
      return '#' + (Math.random() * 0xFFFFFF << 0).toString(16).padStart(6, '0');
    }

    let arrayColors = [];

    for (let i = 0; i < 6; i++) {
      arrayColors[i] = { color: getRandomColor(), state: false };
    }
    arrayColors = [...arrayColors, ...arrayColors]
      .map((color) => ({ ...color, id: Math.random() }))

    setCards(shuffle(arrayColors));
  }, [])

  const handleChoice = (card) => {
    if ((first && second) || notAvailable || card.state) {
      return;
    } else if (card !== first) {
      first ? setSecond(card) : setFirst(card);
    }
  };

  useEffect(() => {
    if (first && second) {
      if (first.color === second.color) {
        setCount(count + 1);
        if (count === ((cards.length / 2) - 1)) {
          setTimeout(() => { setIsModalOpen(true); }, 1400);
        }
        setCards(prevState => {
          return prevState.map(color => {
            if (color.color === first.color) {
              return { ...color, state: true }
            } else return color
          })
        })
        setFirst(null);
        setSecond(null);
      } else {
        setTimeout(() => {
          setFirst(null);
          setSecond(null);
        }, 1000);
      }
    }
  }, [cards.length, count, first, second]);

  useEffect(() => {
    setTimeout(() => {
      setFirstShow(true);
      setTimeout(() => {
        setFirstShow(false);
        setNotAvailable(false);
      }, 2000);
    }, 2000);
  }, []);

  useEffect(() => {
    if (playAgain) {
      window.location.reload();
    }
  }, [playAgain]);

  return (
    <>
      <div className='title'>Memory Game</div>
      <div className="container" style={{opacity: isModalOpen ? 0.4 : 1}} >
        <div className='grid'>
          {
            cards.map((card) => {
              return (
                <Card
                  card={card}
                  key={card.id}
                  handleChoice={handleChoice}
                  show={card === first || card === second || card.state}
                  firstShow={firstShow}
                  notAvailable={notAvailable}
                  wrong={(first && second) && (first.color !== second.color) && (card.state === false)}
                  right={card.state}
                />
              )
            })
          }
        </div>
      </div>
      {
        isModalOpen &&
        <GameContext.Provider value={setPlayAgain}>
          <Modal />
        </GameContext.Provider>
      }
    </>
  );
}

export default App;
