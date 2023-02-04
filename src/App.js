import { useEffect, useState } from "react";
import "./App.css";

import HomePage from "./HomePage";
import GamePage from "./GamePage";
import Nav from "./Components/Nav2";
import { Route, Routes } from "react-router-dom";
function App() {
	const [selectedGame, setSelectedGame] = useState(null);
	const [games, setGames] = useState([]);
	const fetchGames = () => {
		fetch("https://geek-guide.herokuapp.com/api/games/")
			.then((r) => r.json())
			.then((r) => {
				setGames(r);
			})
			.catch(console.error);
	};
	useEffect(() => {
		fetchGames();
	}, []);

	
	return (
		<div className="App">
			<Nav
				selectedGame={selectedGame}
				setSelectedGame={setSelectedGame}
				games={games}
			/>
			<main>
				<Routes>
					<Route path="/geek-guide/" element={<HomePage games={games} />} />
					<Route
						path="/geek-guide/:name"
						element={
							<GamePage
								setSelectedGame={setSelectedGame}
								selectedGame={selectedGame}
								games={games}
							/>
						}
					/>
				</Routes>
			</main>
		</div>
	);
}

export default App;
