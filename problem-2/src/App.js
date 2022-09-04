import './App.css';
import { useEffect, useState, createContext } from 'react'
import Card from './components/card.js'

export const cardContext = createContext();


function App() {

  const [cards, setCards] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [first, setFirst] = useState(null);
  const [second, setSecond] = useState(null);

  useEffect(() => {
    const getRandomColor = () => {
      return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
    
    let arrayColors = [];
    
    for (let i = 0; i < 6; i++) {
      arrayColors[i] = { color: getRandomColor(), state: false };
    }
    arrayColors = [...arrayColors, ...arrayColors];

    setCards(arrayColors);
  },[])

  const handleChoice = (color) => {
    console.log(color);
    first ? setSecond(color) : setFirst(color);
  };

  useEffect(() => {
    if (first && second) {
      if (first === second) {
        console.log("Giustooo")
        setCards(prevState => {
          return prevState.map(color => {
            if (color.color === first) {
              return { ...color, state: true }
            } else return color
          })
        })
        setFirst(null);
        setSecond(null);
      } else {
        setFirst(null);
        setSecond(null);
      }
    }
  }, [first, second]);

  console.log(cards);

  return (

    <div className="container">
      {
        cards.map((color, i) => {
          return (
            <cardContext.Provider value={{ selectedCards, setSelectedCards }}>
              <Card color={color.color} key={i} handleChoice={handleChoice} />
            </cardContext.Provider>
          )
        })
      }
    </div>
  );
}

export default App;
