import { useStore, useStoreDispatch } from "../../context/store";
import { applySettings, closeModal } from "../../context/actions";

import ColorSetting from "./modal-settings/color";
import FontSetting from "./modal-settings/font";
import TimeSetting from "./modal-settings/time";

const Modal = () => {
	const { color_settingData, modal } = useStore();
	const dispatch = useStoreDispatch();

	let activeStyle: string = "";

	color_settingData.forEach(item => {
		if (item.selected) {
			activeStyle = item.name;
		}
	});

	return (
		<div className={modal ? "modal" : "modal close"}>
			<div className='setting'>
				<div className='setting-head'>
					<h1>Settings</h1>
					<button
						className='close'
						title='close modal and return to default'
						onClick={() => dispatch(closeModal())}>
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
						dispatch(closeModal());
						dispatch(applySettings());
					}}>
					Apply
				</button>
			</div>
		</div>
	);
};

export default Modal;
