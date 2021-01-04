import * as React from "react";
import { Nav } from "./components/Nav";
import { Main } from "./components/Main";
import { Footer } from "./components/Footer";
import { Modal } from "./components/Modal";
import "./scss/main.scss";

import { AppContext } from "./context/AppContext";

export const App = () => {
	const { state } = React.useContext(AppContext);

	let activeStyle: string = "";

	state.font_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	return (
		<div className={`app ${activeStyle}`}>
			<header>pomodoro</header>
			<Nav />
			<Main />
			<Footer />
			<Modal />
		</div>
	);
};
