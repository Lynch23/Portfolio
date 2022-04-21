import React from 'react';
import { nanoid } from 'nanoid';
//Components
import Die from './components/Die';
//Styles
import { GlobalStyles } from './GlobalStyle';
function App() {

  const [dice, setDice] = React.useState(allNewDice());
  const [tenzies, setTenzies] = React.useState(false);

  function allNewDice() {
    const newArr = [];
    for (let i = 0; i < 10; i++) {
      newArr.push(generateNewDice());
    }
    return newArr;
  };

  function generateNewDice() {
    return {
      value: Math.ceil(Math.random() * 6),
      isHeld: false,
      id: nanoid()
    }
  };

  function holdDice(id) {
    setDice(prevDice => prevDice.map(
      item => item.id === id ?
        {
          ...item,
          isHeld: !item.isHeld
        } :
        item
    ))
  };

  function rollNewDice() {
    if (tenzies) {
      setTenzies(false);
      setDice(allNewDice())
    }
    else {
      setDice(prevDice => prevDice.map(item =>
        item.isHeld ? item : generateNewDice()));
    }
  };

  const diceElements = dice.map(die => {
    return (
      <Die
        value={die.value}
        key={die.id}
        handleClick={() => { holdDice(die.id) }}
        isHeld={die.isHeld}
      />
    )
  });

  React.useEffect(() => {

    const allHeld = dice.every(die => die.isHeld);
    const firstValue = dice[0].value;
    const allEqual = dice.every(die => die.value === firstValue)
    if (allEqual && allHeld) {
      setTenzies(true);
    }

  }, [dice]);



  return (
    <div className='app-body'>
      <main>
        <header>
          <h1>Tenzies</h1>
          <p>
            Roll until all dice are the same. Click each die to freeze it at its current value between rolls.
          </p>
        </header>
        <div className="dice-container">
          {diceElements}
        </div>
        <button onClick={rollNewDice}>{tenzies ? "New Game" : "Roll"}</button>
      </main>
      <GlobalStyles />
    </div>
  );
}
export default App;