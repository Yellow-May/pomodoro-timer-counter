import * as React from "react";
import { AppContext } from "../../../context/AppContext";

const ColorSetting = () => {
  const { state, actions } = React.useContext(AppContext);

  const { colorSelect } = actions;

  return (
    <div className='color'>
      <h2>Color</h2>
      <div className='options'>
        {state.color_setting.map((item, index) => (
          <div
            key={index}
            className='option'
            onClick={colorSelect.bind(this, item.name)}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              viewBox='0 0 512 512'
              style={{ display: item.selected ? "block" : "none" }}>
              {/* Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
              <path d='M173.898 439.404l-166.4-166.4c-9.997-9.997-9.997-26.206 0-36.204l36.203-36.204c9.997-9.998 26.207-9.998 36.204 0L192 312.69 432.095 72.596c9.997-9.997 26.207-9.997 36.204 0l36.203 36.204c9.997 9.997 9.997 26.206 0 36.204l-294.4 294.401c-9.998 9.997-26.207 9.997-36.204-.001z' />
            </svg>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ColorSetting