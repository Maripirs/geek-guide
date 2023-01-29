import { useEffect, useState } from "react";
import "./App.css";
import data from "./dummydata";
import HomePage from "./HomePage";
import GamePage from "./GamePage";
import Nav from "./Components/Nav";
import { Link } from "react-router-dom";
import {
	BrowserRouter as Router,
	Route,
	Routes,
	useParams,
} from "react-router-dom";
function App(params) {
	const [selectedGame, setSelectedGame] = useState(null);
	const [checked, setChecked] = useState(false);

	const handleDrawer = () => {
		setChecked(!checked);
	};

	const handleSelectGame = (e) => {
		setSelectedGame(e.target.closest("li").id);
	};

	return (
		<div className="App">
			<Nav name={selectedGame} />
			<main>
				<Routes>
					<Route
						path="/"
						element={<HomePage setSelectedGame={setSelectedGame} />}
					/>
					<Route path="/:name" element={<GamePage />} />
				</Routes>
			</main>
		</div>
	);
}

export default App;
