import { useState } from "react";
import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
const Nav = (props) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const [search, setSearch] = useState("");
	const [searchResult, setSearchResult] = useState([]);

	const searchGames = (e) => {
		setSearch(e.target.value);
		let filtered = props.games.filter((game) => {
			return game.displayName
				.toLowerCase()
				.includes(e.target.value.toLowerCase());
		});
		setSearchResult(filtered);
	};
	return (
		<>
			<div className="navbar bg-base-100 fixed top-0 left-0 right-0 z-40">
				<div className="flex-1">
					<button
						className="btn btn-ghost normal-case text-xl"
						onClick={() => setDrawerOpen(true)}
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"
							/>
						</svg>
					</button>
				</div>
				<div className="flex-none">
					{props.selectedGame ? (
						<>
							<div className="dropdown dropdown-end">
								<label
									tabIndex={0}
									className="btn-ghost m-1 flex flex-row items-center"
								>
									{props.selectedGame.displayName}
									<svg
										className="fill-current"
										xmlns="http://www.w3.org/2000/svg"
										width="20"
										height="20"
										viewBox="0 0 24 24"
									>
										<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
									</svg>
								</label>
								<ul
									tabIndex={0}
									className="dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52 bg-neutral"
								>
									{props.selectedGame.sections.map((section) => (
										<li key={section.type}>
											<HashLink to={"#" + section.hashid}>
												{section.type}
											</HashLink>
										</li>
									))}
								</ul>
							</div>
						</>
					) : (
						"GeekGuide"
					)}
				</div>
			</div>

			<div
				className={
					"h-screen fixed top-0 z-50 flex flex-row transition-transform " +
					(drawerOpen ? "w-screen" : "-translate-x-80 w-80")
				}
			>
				<ul className="menu h-screen p-4 w-80 bg-base-100 text-base-content z-50">
					<div className="nav-top flex flex-row justify-between">
						<Link
							to="/geek-guide"
							onClick={() => {
								props.setSelectedGame(null);
								setDrawerOpen(false);
							}}
						>
							<h3>GeekGuide</h3>
						</Link>
						<svg
							onClick={() => {
								setDrawerOpen(false);
							}}
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={1.5}
							stroke="currentColor"
							className="w-6 h-6"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
							/>
						</svg>
					</div>
					<div className="divider"></div>

					<div className="form-control">
						<div className="input-group">
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
					{}
					{(search.length > 0 ? searchResult : props.games).map((game) => {
						return (
							<Link to={"/geek-guide/" + game.name} key={game.name}>
								<li
									onClick={() => {
										setDrawerOpen(false);
										setSearch("");
										setSearchResult([]);
									}}
								>
									<div
										className="card card-side w-xs shadow-md my-1 hover:bg-neutral-focus active:bg-primary"
										style={{ borderRadius: "5px" }}
									>
										<figure className="w-16 rounded-none">
											<img src={game.image} alt={game.displayName + "cover"} />
										</figure>
										<div className="card-body">
											<h3>{game.displayName}</h3>
										</div>
									</div>
								</li>
							</Link>
						);
					})}
				</ul>
				<div
					className=" bg-black w-0 opacity-40 grow cursor-pointer z-40"
					style={{ transitionDuration: "0s" }}
					onClick={() => {
						setDrawerOpen(false);
						setSearch("");
						setSearchResult([]);
					}}
				></div>
			</div>
		</>
	);
};

export default Nav;
