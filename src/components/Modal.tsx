import * as React from "react";
import { AppContext } from "../context/AppContext";
import { ColorSetting } from "./Settings/ColorSetting";
import { FontSetting } from "./Settings/FontSetting";
import { TimeSetting } from "./Settings/TimeSetting";

export const Modal = () => {
	const { state, actions } = React.useContext(AppContext);

	const { closeModal, applySettings } = actions;

	let activeStyle: string = "";

	state.color_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	return (
		<div className={state.modal ? "modal" : "modal close"}>
			<div className='setting'>
				<div className='setting-head'>
					<h1>Settings</h1>
					<button
						className='close'
						title='close modal and return to default'
						onClick={closeModal}>
						&times;
					</button>
				</div>

				<div className='setting-body'>
					<TimeSetting />
					<FontSetting />
					<ColorSetting />
				</div>

				<button
					className={`apply ${activeStyle}`}
					title='apply settings'
					onClick={() => {
						closeModal();
						applySettings();
					}}>
					Apply
				</button>
			</div>
		</div>
	);
};
