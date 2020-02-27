// src/components/Scoreboard.js
import React, { useState, useEffect } from "react";
import Player from "../players/Player";
import AddPlayerForm from "../AddPlayerForm";
import "./Scoreboard.scss";

const compare_score = (player_a, player_b) => player_b.score - player_a.score;
const compare_name = (player_a, player_b) => {
  if (player_a.name > player_b.name) {
    return 1;
  } else {
    return -1;
  }
};

export default Scoreboard => {
  const [players, set_players] = useState([
    { id: 1, name: "Violeta", score: 11 },
    { id: 2, name: "Eszter", score: 14 },
    { id: 3, name: "Jeroen v2", score: 4 },
    { id: 4, name: "Lisa", score: 19 }
  ]);

  function incrementScore(id) {
    const new_players_array = players.map(player => {
      if (player.id === id) {
        player.score = player.score + 1;
      }
      return player;
    });
    set_players(new_players_array);
  }

  const players_sorted = [...players].sort(compare_score);
  const names_sorted = [...players].sort(compare_name);

  const [sort_by, set_sort_by] = useState("score");

  useEffect(() => {
    console.log("The useEffect action!");
  }, []);

  const change_sorting = event => {
    set_sort_by(event.target.value);
  };

  let aPlayer = [];
  if (!sort_by) {
    aPlayer = players.map(player => {
      return (
        <Player
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScore={incrementScore}
        />
      );
    });
  } else if (sort_by === "score") {
    aPlayer = players_sorted.map(player => {
      return (
        <Player
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScore={incrementScore}
        />
      );
    });
  } else {
    aPlayer = names_sorted.map(player => {
      return (
        <Player
          id={player.id}
          name={player.name}
          score={player.score}
          incrementScore={incrementScore}
        />
      );
    });
  }

  // TODO: make a new player object, make new array with this player added, set_players
  function addPlayer(name) {
    const newPlayer = { id: players.length + 1, name: name, score: 0 };
    const newPlayers = [...players, newPlayer];
    set_players(newPlayers);
  }

  return (
    <div className="Scoreboard">
      <h1>Scoreboard</h1>
      <p>Player's score:</p>
      <p>
        Sort order:{" "}
        <select onChange={change_sorting}>
          <option value="score">Score</option>
          <option value="name">Name</option>
        </select>
      </p>
      {aPlayer}
      <AddPlayerForm addPlayer={addPlayer} />
    </div>
  );
};
