import { useEffect, useState } from "react";
import "./App.css";
import HomePage from "./HomePage";
import GamePage from "./GamePage";
import Nav from "./Components/Nav2";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
	const [selectedGame, setSelectedGame] = useState(null);
	const [games, setGames] = useState([]);
	const fetchGames = () => {
		fetch("http://localhost:8000/api/games/")
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
					<Route path="/" element={<HomePage games={games} />} />
					<Route
						path="/:name"
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
