import { Link } from "react-router-dom";

const HomePage = () => {
	return (
		<div className="">
			<Link to="/sagrada">
				<div>Sagrada</div>
			</Link>
			<Link to="/welcome-to">
				<div>Welcome To</div>
			</Link>
		</div>
	);
};

export default HomePage;
