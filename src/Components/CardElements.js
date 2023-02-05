const handleClick = (e) => {
	e.target.closest(".card").classList.toggle("expanded");
};
const ContLegend = (props) => {
	return (
		<>
			<div className="top flex justify-between items-center px-3 py-1 sm:py-3">
				<h3 className="text-base sm:text-xl font-bold">{props.content.name}</h3>
				{props.content.extended.length > 0 && (
					<button
						className="hover:bg-neutral-focus px-2 rounded"
						onClick={handleClick}
					>
						?
					</button>
				)}
			</div>
			<div className="content px-3 pb-2 sm:pb-4 flex flex-row gap-3 items-center">
				<div className="w-14 shrink-0">
					<img src={props.content.image} alt={props.content.name + "icon"} />
				</div>
				<div className="text-sm md:text-lg">{props.content.text}</div>
			</div>
		</>
	);
};
const ContDescription = (props) => {
	return (
		<>
			<div className="top flex justify-between items-center px-3 py-1">
				<div className="content text-sm md:text-lg">{props.content.text}</div>
				{props.content.extended.length > 0 && (
					<button
						className="hover:bg-neutral-focus px-2 rounded"
						onClick={handleClick}
					>
						?
					</button>
				)}
			</div>
		</>
	);
};

const ContExample = (props) => {
	return (
		<>
			<div className="top flex justify-between items-center px-3 py-1 sm:py-3">
				<h3 className="text-base sm:text-xl font-bold">{props.content.name}</h3>
				{props.content.extended.length > 0 && (
					<button
						className="hover:bg-neutral-focus px-2 rounded"
						onClick={handleClick}
					>
						?
					</button>
				)}
			</div>
			<div className="content p-3 flex flex-col sm:flex-row gap-3">
				<div className="content text-sm md:text-lg">{props.content.text}</div>
				<div>
					<img src={props.content.image} alt={props.content.name + "example"} />
				</div>
			</div>
		</>
	);
};
const ExtLegend = (props) => {
	return (
		<div className="extended_contents px-3 flex flex-row gap-3 items-center">
			<div className="w-14 shrink-0">
				<img src={props.extended.image} alt={"icon"} />
			</div>
			<div className="text-xs sm:text-lg">{props.extended.text}</div>
		</div>
	);
};

const ExtDescription = (props) => {
	return (
		<div className="extended_contents p-3 flex flex-col gap-3">
			<div className="text-xs sm:text-lg text-justify">
				{props.extended.text}
			</div>
		</div>
	);
};

const ExtExample = (props) => {
	return (
		<div
			className={
				"extended_contents p-3 flex  gap-3 " +
				props.extended.direction +
				" xl:flex-row"
			}
		>
			<div
				className="text-xs sm:text-lg text-justify"
				style={{ textJustify: "distribute" }}
			>
				{props.extended.text}
			</div>
			<div>
				<img
					style={{ minWidth: "80px" }}
					src={props.extended.image}
					alt={props.extended.name + "example"}
				/>
			</div>
		</div>
	);
};

export {
	ContLegend,
	ContExample,
	ContDescription,
	ExtLegend,
	ExtExample,
	ExtDescription,
};
