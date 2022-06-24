import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Header from './Header';
import Form from './Form';
import DisplayDrinks from './DisplayDrinks';

function App() {

  const [liquorResults, setLiquorResults] = useState([]);
  const [liquorChoice, setLiquorChoice] = useState(null);

  useEffect( () => {
    
    if (liquorChoice && liquorChoice != "placeholder") {
      axios({ 
        baseURL: 'https://www.thecocktaildb.com/api/json/v1/1/filter.php',
        params: {
          i: liquorChoice
        }
      }).then((apiData) => {
        console.log(apiData.data.drinks);
        setLiquorResults(apiData.data.drinks)
      })
    }

  }, [liquorChoice] )

  const selectLiquorChoice = function(event, liquorChoice) {
    event.preventDefault();
    setLiquorChoice(liquorChoice)
  }

  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <Form handleSubmit={selectLiquorChoice}/>
        <DisplayDrinks liquorResults={liquorResults} />
      </div>
    </div>
  );
}

export default App;
