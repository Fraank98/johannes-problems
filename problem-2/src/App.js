import './App.css';
import { useEffect, useState, createContext } from 'react'
import Card from './components/card.js'

export const cardContext = createContext();

function App() {

  const [cards, setCards] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);
  const [firstShow, setFirstShow] = useState(true);
  const [count, setCount] = useState(0);

  useEffect(() => {
    const getRandomColor = () => {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }

    let arrayColors = [];

    for (let i = 0; i < 6; i++) {
      arrayColors[i] = { color: getRandomColor(), state: false };
    }
    arrayColors = [...arrayColors, ...arrayColors]
      .map((color) => ({ ...color, id: Math.random() }))

    setCards(arrayColors);
  }, [])

  const handleChoice = (card) => {
    if (first && second) {
      return;
    } else if (card !== first) {
      first ? setSecond(card) : setFirst(card);
    }
  };

  useEffect(() => {
    if (first && second) {
      if (first.color === second.color) {
        setCount(count + 1);
        console.log(count);
        if (count === ((cards.length / 2) - 1)) {
          setTimeout(() => { window.alert("GOOD!") }, 350);
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
      setFirstShow(false);
    }, 2000);
  }, []);

  return (

    <div className="container">
      {
        cards.map((card) => {
          return (
            <Card card={card} key={card.id} handleChoice={handleChoice} show={card === first || card === second || card.state} firstShow={firstShow} />
          )
        })
      }
    </div>
  );
}

export default App;
