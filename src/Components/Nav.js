import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import data from "../dummydata";
const Nav = (params, props) => {
	const [drawerOpen, setDrawerOpen] = useState(false);
	const { name } = useParams();

	return (
		<div className="drawer drawer-start h-screen w-screen absolute z-40">
			<input
				id="my-drawer-4"
				type="checkbox"
				className="drawer-toggle"
				checked={drawerOpen}
				onChange={() => {}}
			/>
			<div className="drawer-content">
				<div className="navbar bg-base-100">
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
						{name ? (
							<ul className="menu menu-horizontal px-1">
								<li tabIndex={0}>
									<a>
										{props.name}
										<svg
											className="fill-current"
											xmlns="http://www.w3.org/2000/svg"
											width="20"
											height="20"
											viewBox="0 0 24 24"
										>
											<path d="M7.41,8.58L12,13.17L16.59,8.58L18,10L12,16L6,10L7.41,8.58Z" />
										</svg>
									</a>
									<ul className="p-2 bg-base-100">
										<li>
											<a>Submenu 1</a>
										</li>
										<li>
											<a>Submenu 2</a>
										</li>
									</ul>
								</li>
							</ul>
						) : (
							"GeekGuide"
						)}
					</div>
				</div>
			</div>
			<div className="drawer-side">
				<label
					htmlFor="my-drawer-4"
					className="drawer-overlay"
					onClick={() => setDrawerOpen(false)}
				></label>
				<ul className="menu p-4 w-80 bg-base-100 text-base-content ">
					{data.map((game) => {
						return (
							<li
								key={game.name}
								id={game.name}
								onClick={() => setDrawerOpen(false)}
							>
								<Link to={"/" + game.name}>{game.name}</Link>
							</li>
						);
					})}
				</ul>
			</div>
		</div>
	);
};

export default Nav;
