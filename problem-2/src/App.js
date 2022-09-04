import './App.css';
import { useEffect, useState, createContext } from 'react'
import Card from './components/card.js'

export const cardContext = createContext();

function App() {

  const [arrayColors, setArrayColors] = useState([]);
  const [selectedCards, setSelectedCards] = useState([]);
  const [matched, setMatched] = useState(true);

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  useEffect(() => {
    let newArray = [];

    for (let i = 0; i < 6; i++) {
      newArray[i] = getRandomColor();
    }
    newArray = [...newArray, ...newArray];

    setArrayColors(newArray);
  }, []);

  useEffect(() => {
    console.log(selectedCards);
    if (selectedCards.length === 2) {
      if (selectedCards[0] === selectedCards[1]) {
        console.log('Giusto!');
        setSelectedCards([]);
        setMatched(true);
      } else {
        setSelectedCards([]);
        setMatched(false);
      }
    }
  }, [selectedCards])

  return (

    <div className="container">
      {
        arrayColors.map((color, i) => {
          return (
            <cardContext.Provider value={{ selectedCards, setSelectedCards, matched }}>
              <Card color={color} key={i} />
            </cardContext.Provider>
          )
        })
      }
    </div>
  );
}

export default App;
