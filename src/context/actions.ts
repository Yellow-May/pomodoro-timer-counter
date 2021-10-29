import { TimerNames, PayloadType, FontNames, ColorNames } from "./app-store-types-interfaces";

export const toggleNav = (payload: TimerNames) => ({
	type: "TOGGLE_NAV",
	payload,
});

export const openModal = () => ({
	type: "OPEN_MODAL",
});

export const closeModal = () => ({
	type: "CLOSE_MODAL",
});

export const incDur = (payload: PayloadType) => ({
	type: "INC_DURATION",
	payload,
});

export const fontSelect = (payload: FontNames) => ({
	type: "FONT_SELECT",
	payload,
});

export const colorSelect = (payload: ColorNames) => ({
	type: "COLOR_SELECT",
	payload,
});

export const applySettings = () => ({
	type: "APPLY_SETTINGS",
});

export const playNdPause = (payload: PayloadType) => ({
	type: "PLAY_PAUSE",
	payload,
});

export const updateTimer = (payload: PayloadType) => ({
	type: "UPDATE_TIMER",
	payload,
});
