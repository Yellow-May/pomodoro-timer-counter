interface NavType {
	name: string;
	active: boolean;
}

export type TimerNames = "pomodoro" | "short break" | "long break";
export type FontNames = "sans-serif" | "cursive" | "times-new-roman";
export type ColorNames = "red-orange" | "light-blue" | "purple";

interface TimeSettingType {
	name: TimerNames;
	duration: number;
}

interface OptionsSettingType {
	name: FontNames | ColorNames;
	selected: boolean;
}

interface TimeLeftType {
	minutes: string;
	seconds: string;
}

export interface TimerDataType {
	name: TimerNames;
	duration: number;
	timeLeft: TimeLeftType;
	svgDuration: number;
	play: boolean;
	active: boolean;
}

export interface InitialType {
	nav: NavType[];
	modal: boolean;
	time_setting: TimeSettingType[];
	font_setting: OptionsSettingType[];
	color_setting: OptionsSettingType[];
	timerData: TimerDataType[];
	font_settingData: OptionsSettingType[];
	color_settingData: OptionsSettingType[];
}

export interface ContextProps {
	store: InitialType;
	dispatch: React.Dispatch<ActionType>;
}

export interface PayloadType {
	name: string;
	newData: number | boolean | { minutes: string; seconds: string; duration: number };
}

export interface ActionType {
	type: string;
	payload?: any;
}
