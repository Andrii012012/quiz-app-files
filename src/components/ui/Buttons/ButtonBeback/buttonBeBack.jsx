import { useNavigate } from "react-router-dom";
import { memo } from "react";

const ButtonBeBack = memo((props) => {
  let { className, dark, updataPage = false } = props;

  const callBack = useNavigate();

  function callBackMain(e) {
    callBack("/");
    updataPage && window.location.reload();
  }

  return (
    <div
      onClick={callBackMain}
      className={className}
      role="button"
      tabIndex="0"
      aria-label="Кнопка назад"
    >
      <svg
        className={dark}
        xmlns="http://www.w3.org/2000/svg"
        version="1.0"
        width="200.000000pt"
        height="200.000000pt"
        viewBox="0 0 200.000000 200.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,200.000000) scale(0.100000,-0.100000)"
          stroke="none"
        >
          <path d="M1392 1558 c-17 -17 -15 -45 4 -52 9 -3 84 -6 167 -6 l152 0 -329 -329 c-270 -271 -327 -333 -324 -352 8 -59 34 -38 374 302 l333 333 3 -159 3 -160 25 0 25 0 3 202 c2 173 0 203 -14 217 -13 14 -46 16 -213 16 -140 0 -200 -3 -209 -12z" />
          <path d="M442 1288 c-9 -9 -12 -145 -12 -549 0 -296 3 -544 6 -553 6 -14 65 -16 564 -16 499 0 558 2 564 16 3 9 6 168 6 354 0 358 -1 367 -47 358 -17 -3 -18 -25 -21 -336 l-2 -332 -500 0 -500 0 0 500 0 500 319 0 c277 0 322 2 335 16 19 19 20 26 4 42 -17 17 -699 17 -716 0z" />
        </g>
      </svg>
    </div>
  );
});

export default ButtonBeBack;
