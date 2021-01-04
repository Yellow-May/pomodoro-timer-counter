import * as React from "react";
import { AppContext } from "../../context/AppContext";

export const TimeSetting = () => {
  const { state, actions } = React.useContext(AppContext);

  const { incDur } = actions;

  const handleInc = (
    name: string,
    dur: number,
    type: "increase" | "decrease"
  ): void => {
    let newData: number = dur;
    if (type === "increase") {
      newData = dur + 1;
    } else if (type === "decrease" && dur > 0) {
      newData = dur - 1;
    }
    incDur({ name, newData });
  };

  return (
    <div className='time'>
      <h2>Time (Minutes)</h2>
      <div className='options'>
        {state.time_setting.map((item, index) => (
          <div key={index} className='option'>
            <h3>{item.name}</h3>
            <div className='select'>
              <span>
                {item.duration < 10 ? "0" + item.duration : item.duration}
              </span>
              <div className='increment'>
                <div
                  className='up'
                  onClick={() =>
                    handleInc(item.name, item.duration, "increase")
                  }>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                    {/* Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d='M177 159.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 255.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 329.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1z' />
                  </svg>
                </div>
                <div
                  className='down'
                  onClick={() =>
                    handleInc(item.name, item.duration, "decrease")
                  }>
                  <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 320 512'>
                    {/* Font Awesome Free 5.15.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License) */}
                    <path d='M143 352.3L7 216.3c-9.4-9.4-9.4-24.6 0-33.9l22.6-22.6c9.4-9.4 24.6-9.4 33.9 0l96.4 96.4 96.4-96.4c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9l-136 136c-9.2 9.4-24.4 9.4-33.8 0z' />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
