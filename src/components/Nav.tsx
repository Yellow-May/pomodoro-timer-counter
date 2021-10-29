import { useStore, useStoreDispatch } from "../context/store";
import { toggleNav } from "../context/actions";
import { TimerNames } from "../context/app-store-types-interfaces";

const Nav = () => {
	const { color_settingData, nav } = useStore();
	const dispatch = useStoreDispatch();

	let activeStyle: string = "";

	color_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	const handleClick = (name: TimerNames) => dispatch(toggleNav(name));

	return (
		<nav>
			{nav.map((item: any, index: number) => (
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
