import { useEffect } from "react";
import { useParams } from "react-router-dom";
import ContentCard from "./Components/ContentCard";

const GamePage = (props, params) => {
	const { name } = useParams();
	const fetchGame = () => {
		fetch(`https://geek-guide.herokuapp.com/api/game/${name}`)
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
		{ field: "Year", value: "year" },
		{ field: "Players", value: "players" },
		{ field: "Playing Time", value: "playingTime" },
	];

	return props.selectedGame ? (
		<>
			<div className="navbar bg-base-100"></div>
			<div className="flex flex-col items-center">
				<div className="card card-side bg-neutral bg-base-100 shadow-xl mx-8 mb-8 w-11/12 md:w-2/3">
					<figure>
						<img
							className="h-48 sm:h-[16.5rem] w-max-[40%]"
							src={props.selectedGame.image}
							alt={props.selectedGame.name + "cover"}
						/>
					</figure>
					<div className="card-body p-3 sm:p-6 gap-0 sm:gap-1">
						<h2 className="card-title text-lg sm:text-2xl font-bold">
							{props.selectedGame.displayName}
						</h2>
						{cardInfo.map((item) => (
							<div className="stat px-0 py-1 " key={item.field}>
								<div className="stat-title text-xs sm:text-base">
									{item.field}
								</div>
								<div className="stat-value text-sm sm:text-lg leading-5">
									{props.selectedGame[item.value]}
								</div>
							</div>
						))}

						<a
							className="link text-sm sm:text-xl"
							href={props.selectedGame.bgg}
						>
							BGG Site
						</a>
					</div>
				</div>
				<div className="sections">
					{props.selectedGame.sections.map((section, i) => (
						<div
							className="section flex flex-col items-center w-screen"
							key={i}
							id={section.hashid}
						>
							<div className="navbar bg-base-100"></div>
							<div className="grid h-12 sm:h-[4.5rem] card bg-base-300 rounded-box place-items-center m-4 w-11/12 overflow-hidden">
								<div className="z-10 font-bold text-xl">{section.type}</div>
								{props.selectedGame.banner && (
									<>
										<div className="over-banner bg-base-100"></div>
										<img
											className="section-banner min-h-24 min-w-full -bottom-2"
											src={props.selectedGame.banner}
											alt={props.selectedGame + " banner"}
										/>
									</>
								)}
							</div>

							<div
								className={
									"flex justify-center items-center w-full " +
									(section.type === "Icon Legend"
										? "flex-row flex-wrap "
										: "flex-col")
								}
							>
								{section.contents.map((content, i) => (
									<ContentCard key={i} content={content} />
								))}
							</div>
						</div>
					))}
				</div>
			</div>
			<div className="navbar bg-base-100"></div>
		</>
	) : (
		"loading"
	);
};

export default GamePage;
