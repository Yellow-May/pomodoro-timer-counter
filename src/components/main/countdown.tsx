import * as React from "react";
import { useStore, useStoreDispatch } from "../../context/store";
import { playNdPause, updateTimer } from "../../context/actions";
import { TimerDataType } from "../../context/app-store-types-interfaces";

import pauseSvg from "../../assets/svg/pause.svg";
import playSvg from "../../assets/svg/play.svg";

let interval: ReturnType<typeof setInterval>;

const Countdown: React.FC<TimerDataType> = ({ name, duration, timeLeft, svgDuration, play }) => {
	const { color_settingData } = useStore();
	const dispatch = useStoreDispatch();

	let activeStyle: string = "";

	color_settingData.forEach(item => {
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
					dispatch(
						updateTimer({
							name,
							newData: {
								minutes: String(minutesLeftOutput),
								seconds: String(secondsLeftOutput),
								duration: duration - 1,
							},
						})
					);
				} else {
					dispatch(playNdPause({ name, newData: false }));
				}
			}, 1000);
		}

		return () => {
			clearInterval(interval);
		};
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [duration, minutesLeftOutput, name, play, secondsLeftOutput]);

	return (
		<div
			className={`countdown ${activeStyle}`}
			onClick={() =>
				dispatch(
					playNdPause({
						name,
						newData: !play,
					})
				)
			}>
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

export default Countdown;
