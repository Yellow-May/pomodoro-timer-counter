import { useStore } from "../../context/store";
import Countdown from "./countdown";

const Main = () => {
	const { timerData } = useStore();

	return (
		<main className='pomodoro'>
			<div className='timer'>
				{timerData.map((item, index) => {
					let e: JSX.Element = <div key={index}></div>;
					if (item.active) {
						e = <Countdown key={index} {...item} />;
					}
					return e;
				})}
			</div>
		</main>
	);
};

export default Main;
