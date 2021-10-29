import { InitialType } from "./app-store-types-interfaces";

const initialState: InitialType = {
	nav: [
		{ name: "pomodoro", active: true },
		{ name: "short break", active: false },
		{ name: "long break", active: false },
	],
	modal: true,
	time_setting: [
		{ name: "pomodoro", duration: 0 },
		{ name: "short break", duration: 0 },
		{ name: "long break", duration: 0 },
	],
	font_setting: [
		{ name: "sans-serif", selected: true },
		{ name: "times-new-roman", selected: false },
		{ name: "cursive", selected: false },
	],
	color_setting: [
		{ name: "red-orange", selected: true },
		{ name: "light-blue", selected: false },
		{ name: "purple", selected: false },
	],
	timerData: [
		{
			name: "pomodoro",
			duration: 0,
			timeLeft: {
				minutes: "00",
				seconds: "00",
			},
			svgDuration: 0,
			play: true,
			active: true,
		},
		{
			name: "short break",
			duration: 0,
			timeLeft: {
				minutes: "00",
				seconds: "00",
			},
			svgDuration: 0,
			play: false,
			active: false,
		},
		{
			name: "long break",
			duration: 0,
			timeLeft: {
				minutes: "00",
				seconds: "00",
			},
			svgDuration: 0,
			play: false,
			active: false,
		},
	],
	font_settingData: [
		{ name: "sans-serif", selected: true },
		{ name: "times-new-roman", selected: false },
		{ name: "cursive", selected: false },
	],
	color_settingData: [
		{ name: "red-orange", selected: true },
		{ name: "light-blue", selected: false },
		{ name: "purple", selected: false },
	],
};

export default initialState;
