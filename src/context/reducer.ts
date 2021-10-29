import { InitialType, ActionType } from "./app-store-types-interfaces";

const mainReducer = (state: InitialType, action: ActionType) => {
	switch (action.type) {
		case "TOGGLE_NAV":
			return {
				...state,
				nav: state.nav.map(item => {
					item.active = item.name === action.payload ? true : false;
					return item;
				}),
				timerData: state.timerData.map(item => {
					item.active = item.name === action.payload ? true : false;
					return item;
				}),
			};

		case "OPEN_MODAL":
			return {
				...state,
				modal: true,
				timerData: state.timerData.map(item => ({ ...item, play: false })),
			};

		case "CLOSE_MODAL":
			return {
				...state,
				modal: false,
			};

		case "INC_DURATION":
			return {
				...state,
				time_setting: state.time_setting.map(item => {
					if (item.name === action.payload.name) item.duration = action.payload.newData;
					return item;
				}),
			};

		case "FONT_SELECT":
			return {
				...state,
				font_setting: state.font_setting.map(item => {
					item.selected = item.name === action.payload ? true : false;
					return item;
				}),
			};

		case "COLOR_SELECT":
			return {
				...state,
				color_setting: state.color_setting.map(item => {
					item.selected = item.name === action.payload ? true : false;
					return item;
				}),
			};

		case "APPLY_SETTINGS":
			return {
				...state,
				nav: state.nav.map(item => {
					item.active = item.name === "pomodoro" ? true : false;
					return item;
				}),
				timerData: state.time_setting.map(item => {
					return {
						name: item.name,
						duration: item.duration * 60,
						timeLeft: {
							minutes: item.duration < 10 ? "0" + item.duration : item.duration.toString(),
							seconds: "00",
						},
						svgDuration: item.duration * 60,
						play: false,
						active: item.name === "pomodoro" ? true : false,
					};
				}),
				font_settingData: state.font_setting,
				color_settingData: state.color_setting,
			};

		case "PLAY_PAUSE":
			return {
				...state,
				timerData: state.timerData.map(item => {
					if (item.name === action.payload.name) item.play = action.payload.newData;
					return item;
				}),
			};

		case "UPDATE_TIMER":
			return {
				...state,
				timerData: state.timerData.map(item => {
					if (item.name === action.payload.name) {
						item.duration = action.payload.newData.duration;
						item.timeLeft = {
							minutes: action.payload.newData.minutes,
							seconds: action.payload.newData.seconds,
						};
					}
					return item;
				}),
			};

		default:
			return state;
	}
};

export default mainReducer;
