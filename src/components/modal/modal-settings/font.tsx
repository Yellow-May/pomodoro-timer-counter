import * as React from "react";
import { AppContext } from "../../../context/AppContext";

const FontSetting = () => {
	const { state, actions } = React.useContext(AppContext);

	const { fontSelect } = actions;

	let activeStyle: string = "";

	state.font_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	return (
		<div className='font'>
			<h2>Font</h2>
			<div className='options'>
				{state.font_setting.map((item, index) => (
					<div
						key={index}
						className={`option ${activeStyle}`}
						style={{
							boxShadow: item.selected ? "0.125rem 0.125rem 0.25rem #000" : "none",
						}}
						onClick={fontSelect.bind(this, item.name)}>
						Aa
					</div>
				))}
			</div>
		</div>
	);
};

export default FontSetting;
