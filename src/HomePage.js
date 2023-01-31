import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
const HomePage = (props) => {
	const [search, setSearch] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const searchGames = (e) => {
		setSearch(e.target.value);
		let filtered = [];
		for (let i = 0; i < props.games.length; i++) {
			if (
				props.games[i].displayName
					.toLowerCase()
					.includes(e.target.value.toLowerCase())
			) {
				filtered.push(props.games[i]);
			}
		}
		setSearchResult(filtered);
	};

	return (
		<div className="all-games">
			<div className="navbar bg-base-100"></div>
			<div className="form-control ">
				<div className="input-group w-full flex align-center justify-center">
					<input
						type="text"
						placeholder="Search…"
						className="input input-bordered"
						onChange={searchGames}
					/>
					<button className="btn btn-square">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							className="h-6 w-6"
							fill="none"
							viewBox="0 0 24 24"
							stroke="currentColor"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								strokeWidth="2"
								d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
							/>
						</svg>
					</button>
				</div>
			</div>
			<div className="flex w-full flex-row flex-wrap justify-center p-4">
				{(search.length > 0 ? searchResult : props.games).map((game) => (
					<Link
						to={game.name}
						key={game.name}
						onClick={() => {
							setSearch("");
							setSearchResult([]);
						}}
					>
						<div
							className="card bg-neutral h-50 w-40 shadow-md m-2 hover:bg-neutral-focus active:bg-primary p-4 "
							// style={{ borderRadius: "5px" }}
						>
							<figure className="h-40 rounded-none">
								<img src={game.image} alt={game.displayName + "cover"} />
							</figure>
							<div className="card-body p-0 mt-3 flex justify-center items-center">
								<p>{game.displayName}</p>
							</div>
						</div>
					</Link>
				))}
			</div>
		</div>
	);
};

export default HomePage;
