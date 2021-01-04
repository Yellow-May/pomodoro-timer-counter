import * as React from "react";
import { mainReducer } from "./MainReducer";

import {
	initialType,
	contextProps,
	timerNames,
	fontNames,
	colorNames,
	payloadType,
} from "./ContextInterfaces";

const initialState: initialType = {
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

export const AppContext = React.createContext({} as contextProps);

export const AppProvider: React.FC = ({ children }) => {
	const [state, dispatch] = React.useReducer(mainReducer, initialState);

	const toggleNav = (payload: timerNames) =>
		dispatch({
			type: "TOGGLE_NAV",
			payload,
		});

	const openModal = () => {
		dispatch({
			type: "OPEN_MODAL",
		});
	};

	const closeModal = () => {
		dispatch({
			type: "CLOSE_MODAL",
		});
	};

	const incDur = (payload: payloadType) => {
		dispatch({
			type: "INC_DURATION",
			payload,
		});
	};

	const fontSelect = (payload: fontNames) => {
		dispatch({
			type: "FONT_SELECT",
			payload,
		});
	};

	const colorSelect = (payload: colorNames) => {
		dispatch({
			type: "COLOR_SELECT",
			payload,
		});
	};

	const applySettings = () => {
		dispatch({
			type: "APPLY_SETTINGS",
		});
	};

	const playNdPause = (payload: payloadType) => {
		dispatch({
			type: "PLAY_PAUSE",
			payload,
		});
	};

	const updateTimer = (payload: payloadType) => {
		dispatch({
			type: "UPDATE_TIMER",
			payload,
		});
	};

	const actions = {
		toggleNav,
		openModal,
		closeModal,
		incDur,
		fontSelect,
		colorSelect,
		applySettings,
		playNdPause,
		updateTimer,
	};
	const value = { state, actions };

	return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
