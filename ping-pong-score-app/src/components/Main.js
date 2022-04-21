import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card, Button, ButtonGroup } from 'react-bootstrap';
import Confetti from 'react-confetti';
export default function Main() {
  //Object holding player scores and winning scores
  const [game, setGame] = useState({
    p1: 0,
    p2: 0,
    wScore: 2,
  }); 
  //GameOver state variable true | false
  const [gameOver, setGameOver] = useState(false); 
  //Function to handle change and sync with winning score state
  function handleChange(e) {
    const value = e.target.value;
    reset();
    setGame(prevGame => ({
      ...prevGame, wScore: parseInt(value)
    }));
  }
  //Function that handles the click event on the buttons
  function handleClick(e) {
    let name = e.target.name;
    if (!gameOver) {
      setGame(prevGame => {
        return (
          name === "p1" ?
            { ...prevGame, p1: prevGame.p1 + 1 } :
            { ...prevGame, p2: prevGame.p2 + 1 }
        )
      });
    }
  }
  //UseEffect hook to determine the end of the game.
  useEffect(
    () => {
      let diff = Math.abs(game.p1 - game.p2);
      if ((game.p1 >= game.wScore || game.p2 >= game.wScore) && diff >= 2) {
        setGameOver(true);
      }
    }, [game]
  )
  //Reset Game Button
  function reset() {
    setGameOver(false);
    setGame(prevGame => ({
      ...prevGame,
      p1: 0,
      p2: 0
    }));
  }
  //Function that toggles the bootstrap classes "text-success" | "text-danger"
  function gameWinner(p1, p2, gameOver) {
    if (gameOver) {
      if (p1 > p2) {return "text-success";}
      else {return "text-danger";}
    }
  }
  console.log(game, gameOver);
  return (
    <Card className="col-6 text-start">
      {gameOver && <Confetti
      width='600'
      numberOfPieces='30'
      />
      }
      <Card.Img
        src='Images/ping-pong.jpg' />
      <Card.Title>
        Ping Pong Score Keeper
      </Card.Title>
      <Card.Body className="container">
        <h1>
          <span className={gameWinner(game.p1, game.p2, gameOver)}>{game.p1}
          </span> to <span className={gameWinner(game.p2, game.p1,gameOver)}>{game.p2}
          </span>
        </h1>
        <p className='fs-3'>Use buttons below to keep score</p>
        <label htmlFor="playTo">Playing To</label>
        <select
          value={game.wScore}
          id="playTo"
          onChange={handleChange}>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
          <option value={6}>6</option>
          <option value={7}>7</option>
          <option value={8}>8</option>
          <option value={9}>9</option>
          <option value={10}>10</option>
          <option value={11}>11</option>
        </select>
      </Card.Body>
      <Card.Footer className="p-0">
        <ButtonGroup className="container p-0 h-100">
          <Button
            variant="info"
            className="col-4"
            onClick={handleClick}
            name="p1"
            disabled={gameOver}
          >+1 Player One</Button>
          <Button
            variant="success"
            className="col-4"
            onClick={handleClick}
            name="p2"
            disabled={gameOver}
          >+1 Player Two</Button>
          <Button
            variant="danger"
            className="col-4"
            onClick={reset}
          >Reset</Button>
        </ButtonGroup>
      </Card.Footer>
    </Card>
  );
}