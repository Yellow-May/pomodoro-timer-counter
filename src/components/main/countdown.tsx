import * as React from "react";
import { AppContext } from "../../context/AppContext";
import { timerDataType } from "../../context/ContextInterfaces";

import pauseSvg from "../../assets/svg/pause.svg";
import playSvg from "../../assets/svg/play.svg";

let interval: ReturnType<typeof setInterval>;

export const Countdown: React.FC<timerDataType> = ({
	name,
	duration,
	timeLeft,
	svgDuration,
	play,
}) => {
	const { state, actions } = React.useContext(AppContext);

	const { playNdPause, updateTimer } = actions;

	let activeStyle: string = "";

	state.color_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	const minutesLeft = Math.floor(duration / 60);
	const secondsLeft = duration % 60;

	const minutesLeftOutput = minutesLeft < 10 ? "0" + minutesLeft : minutesLeft;
	const secondsLeftOutput = secondsLeft < 10 ? "0" + secondsLeft : secondsLeft;

	React.useEffect(() => {
		if (!play) {
			clearInterval(interval);
		}
	}, [play]);

	React.useEffect(() => {
		if (play) {
			interval = setInterval(() => {
				if (duration > 0) {
					updateTimer({
						name,
						newData: {
							minutes: minutesLeftOutput,
							seconds: secondsLeftOutput,
							duration: duration - 1,
						},
					});
				} else {
					playNdPause({ name, newData: false });
				}
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
	}, [
		play,
		duration,
		updateTimer,
		minutesLeftOutput,
		secondsLeftOutput,
		name,
		playNdPause,
		timeLeft,
	]);

	return (
		<div
			className={`countdown ${activeStyle}`}
			onClick={playNdPause.bind(this, {
				name: name,
				newData: !play,
			})}>
			<svg viewBox='0 0 100 100'>
				<circle r='47.5%' cx='50%' cy='50%' />
				<circle
					strokeDashoffset={
						duration > 0 ? (duration / svgDuration) * 47 * 2 * Math.PI + 47 * 2 * Math.PI : ""
					}
					strokeDasharray={47 * 2 * Math.PI}
					r='47.5%'
					cx='50%'
					cy='50%'
				/>
			</svg>
			<div
				className='output'
				style={{
					zIndex: 1,
					transform: play && duration > 0 ? "scale(1.15)" : "unset",
				}}>
				<span>{timeLeft.minutes + ":" + timeLeft.seconds}</span>
				<object data={play && duration > 0 ? pauseSvg : playSvg} type='image/svg+xml'>
					your browser does not support this svg
				</object>
			</div>
		</div>
	);
};
