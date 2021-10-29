import Nav from "./components/nav";
import Main from "./components/main";
import Footer from "./components/footer";
import Modal from "./components/modal";

import { useStore } from "./context/store";

export default function App() {
	const { font_settingData } = useStore();

	let activeStyle: string = "";

	font_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	return (
		<div className={`app ${activeStyle}`}>
			<Nav />
			<Main />
			<Footer />
			<Modal />
		</div>
	);
}
