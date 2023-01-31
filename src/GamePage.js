import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const GamePage = (props, params) => {
	const { name } = useParams();

	const fetchGame = () => {
		fetch(`http://localhost:8000/api/game/${name}`)
			.then((r) => r.json())
			.then((r) => {
				props.setSelectedGame(r);
			})
			.catch(console.error);
	};

	useEffect(() => {
		fetchGame();
	}, []);

	useEffect(() => {
		fetchGame();
	}, [name]);

	const cardInfo = [
		{ field: "Year", value: "props.selectedGame.year" },
		{ field: "Players", value: "props.selectedGame.players" },
		{ field: "Playing Time", value: "props.selectedGame.playingTime" },
	];

	return props.selectedGame ? (
		<>
			<div className="navbar bg-base-100"></div>
			<div className="flex flex-col items-center">
				<div className="card card-side bg-neutral bg-base-100 shadow-xl mx-8 mb-8 max-w-xl">
					<figure>
						<img
							className="w-16 sm:w-32 lg:w-96"
							src={props.selectedGame.image}
							alt={props.selectedGame.name + "cover"}
						/>
					</figure>
					<div className="card-body">
						<h2 className="card-title ">{props.selectedGame.displayName}</h2>
						{cardInfo.map((item) => (
							<div className="stat px-0 py-1" key={item.field}>
								<div className="stat-title text-sm">{item.field}</div>
								<div className="stat-value text-lg">{eval(item.value)}</div>
							</div>
						))}

						<a className="link" href={props.selectedGame.bgg}>
							BGG Site
						</a>
					</div>
				</div>
				<div className="sections">
					{props.selectedGame.sections.map((section, i) => (
						<div
							className="section flex flex-col items-center w-full"
							key={i}
							id={section.hashid}
						>
							<div className="navbar bg-base-100"></div>
							<div className="grid h-20 card bg-base-300 rounded-box place-items-center m-4 w-11/12">
								{section.type}
							</div>

							{section.type === "Icon Legend" ? (
								<div className="legends flex flex-row flex-wrap">
									{section.legends.map((legend, i) => (
										<div key={i} className="card card-side shadow-xl mx-8 my-4">
											<figure className="w-20 flex-shrink-0">
												<img src={legend.image} alt={legend.name + "cover"} />
											</figure>
											<div className="card-body">
												<h3>{legend.name}</h3>

												<p> {legend.description}</p>
											</div>
										</div>
									))}
								</div>
							) : (
								<>
									<div className="content flex flex-col mx-8 md:w-96 ">
										{section.content.map((cont) => (
											<div className="my-1">
												<span className="text-2xl">&#x2022;</span> {cont}
											</div>
										))}
									</div>
								</>
							)}
						</div>
					))}
				</div>
			</div>
		</>
	) : (
		"loading"
	);
};

export default GamePage;
