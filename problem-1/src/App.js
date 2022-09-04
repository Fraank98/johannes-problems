import './App.css';
import RowColumn from './components/RowColumn';
import Column from './components/Column';

function App() {

  const getRandomColor = () => {
    return '#' + Math.floor(Math.random() * 16777215).toString(16);
  }

  const style = {
    height: "20%",
    width1: "50%",
    width2: "20%",
  }

  return (
    <div className="container">
      <div className="column">
        {
          Array.from(Array(5), (i) => {
            const color = getRandomColor();
            return <RowColumn color={color} height={style.height} />
          })
        }
      </div>
      <div className="column">
        {
          Array.from(Array(2), (i) => {
            const arrayColor = Array.from(Array(2), (i) => {
              return getRandomColor();
            })
            return <Column randomColor={arrayColor} width={style.width1} />
          })
        }
      </div>
      <div className="column-fixed">
        {
          Array.from(Array(25), (i) => {
            const color = getRandomColor();
            return <RowColumn color={color} width={style.width2} className={"rowColumn"}/>
          })
        }
      </div>
    </div>
  );
}

export default App;
