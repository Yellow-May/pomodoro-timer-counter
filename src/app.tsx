import * as React from "react";
import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";
import Modal from "./components/modal";

import { AppContext } from "./context/AppContext";

export default function App() {
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
}
