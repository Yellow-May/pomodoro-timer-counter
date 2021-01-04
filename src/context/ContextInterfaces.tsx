interface navType {
	name: string;
	active: boolean;
}

export type timerNames = "pomodoro" | "short break" | "long break";
export type fontNames = "sans-serif" | "cursive" | "times-new-roman";
export type colorNames = "red-orange" | "light-blue" | "purple";

interface timeSettingType {
	name: timerNames;
	duration: number;
}

interface optionsSettingType {
	name: fontNames | colorNames;
	selected: boolean;
}

interface timeLeftType {
	minutes: string;
	seconds: string;
}

export interface timerDataType {
	name: timerNames;
	duration: number;
	timeLeft: timeLeftType;
	svgDuration: number;
	play: boolean;
	active: boolean;
}

export interface initialType {
	nav: navType[];
	modal: boolean;
	time_setting: timeSettingType[];
	font_setting: optionsSettingType[];
	color_setting: optionsSettingType[];
	timerData: timerDataType[];
	font_settingData: optionsSettingType[];
	color_settingData: optionsSettingType[];
}

export interface contextProps {
	state: initialType;
	actions: any;
}

export interface payloadType {
	name: string;
	newData: number | boolean | { minutes: string; seconds: string };
}

export interface actionType {
	type: string;
	payload?: any;
}
