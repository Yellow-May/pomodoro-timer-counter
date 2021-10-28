import * as React from "react";
import { AppContext } from "../context/AppContext";

const Nav = () => {
	const { state, actions } = React.useContext(AppContext);

	const { toggleNav } = actions;

	let activeStyle: string = "";

	state.color_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	const handleClick = (name: string) => {
		toggleNav(name);
	};

	return (
		<nav>
			{state.nav.map((item: any, index: number) => (
				<button
					key={index}
					className={item.active ? ` nav-link active ${activeStyle}` : "nav-link"}
					title={`nav link ${item.name}`}
					onClick={handleClick.bind(this, item.name)}>
					{item.name}
				</button>
			))}
		</nav>
	);
};

export default Nav;
