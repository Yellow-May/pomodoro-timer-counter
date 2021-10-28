import * as React from "react";
import { AppContext } from "../../context/AppContext";
import { Countdown } from "./countdown";

const Main = () => {
	const { state } = React.useContext(AppContext);

	return (
		<main className='pomodoro'>
			<div className='timer'>
				{state.timerData.map((item, index) => {
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
