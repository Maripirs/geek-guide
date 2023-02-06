import {
	ContLegend,
	ContExample,
	ContDescription,
	ExtLegend,
	ExtExample,
	ExtDescription,
} from "./CardElements";

const contentComp = {
	legend: ContLegend,
	example: ContExample,
	description: ContDescription,
};
const extendedComp = {
	legend: ExtLegend,
	example: ExtExample,
	description: ExtDescription,
};
const ContentCard = (props) => {
	const Content = contentComp[props.content.type];
	return (
		<div
			className="card bg-neutral shadow-xl mx-4 my-1 sm:my-3 w-11/12 md:w-1/3 overflow-hidden h-fit"
			style={{ borderRadius: "5px" }}
		>
			<Content content={props.content} />
			{props.content.extended.length > 0 && (
				<div className="extended bg-primary ">
					{props.content.extended.map((ext, i) => {
						const Extended = extendedComp[ext.type];
						return <Extended key={i} extended={ext} />;
					})}
				</div>
			)}
		</div>
	);
};

export default ContentCard;
