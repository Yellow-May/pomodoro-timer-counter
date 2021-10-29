import { useStore, useStoreDispatch } from "../../../context/store";
import { fontSelect } from "../../../context/actions";
import { FontNames } from "../../../context/app-store-types-interfaces";

const FontSetting = () => {
	const { font_settingData, font_setting } = useStore();
	const dispatch = useStoreDispatch();

	let activeStyle: string = "";

	font_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	return (
		<div className='font'>
			<h2>Font</h2>
			<div className='options'>
				{font_setting.map(({ name, selected }, index) => (
					<div
						key={index}
						className={`option ${activeStyle}`}
						style={{
							boxShadow: selected ? "0.125rem 0.125rem 0.25rem #000" : "none",
						}}
						onClick={() => dispatch(fontSelect(name as FontNames))}>
						Aa
					</div>
				))}
			</div>
		</div>
	);
};

export default FontSetting;
