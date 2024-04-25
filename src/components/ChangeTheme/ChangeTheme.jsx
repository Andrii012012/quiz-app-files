import { memo } from "react";
import './changeThemeStyle.css';
import sun from "../../assets/images/sun.svg";
import moon from "../../assets/images/moon.svg";

function setTheme() {
  if (document.querySelector(".theme__icon")) {
    const themeIcon = document.querySelector(".theme__icon");
    const indicatorTheme = document.querySelector(".theme__indicator");
    const classNameApp = document.querySelector(".App");

    if (localStorage.getItem("theme") !== null) {
      const theme = localStorage.getItem("theme");
      const parse = JSON.parse(theme);

      if (parse.className === "darkmode") {
        classNameApp.classList.add("darkmode");
        themeIcon.src = moon;
        indicatorTheme.style.transform = "translate(7em, 0em)";
      }
    }
  }
}

const ChangeTheme = memo((props) => {
  function toggleTheme(e) {
    const classNameApp = document.querySelector(".App");
    const indicatorTheme = document.querySelector(".theme__indicator");
    const themeIcon = document.querySelector(".theme__icon");
    classNameApp.classList.toggle("darkmode");

    if (classNameApp.classList.contains("darkmode")) {
      themeIcon.src = moon;
      indicatorTheme.style.transform = "translate(7em, 0em)";
      localStorage.setItem("theme", JSON.stringify({ className: "darkmode" }));
    } else {
      themeIcon.src = sun;
      indicatorTheme.style.transform = "translate(0em, 0em)";
      localStorage.setItem("theme", JSON.stringify({ className: undefined }));
    }
  }

  return (
    <div className="theme">
      <div
        onClick={toggleTheme}
        tabIndex="0"
        role="button"
        aria-label="Сменить тему сайта"
        className="theme__container"
      >
        <div className="theme__indicator">
          <div className="theme__container-icon">
            <img src={sun} className="theme__icon" alt="indecator" />
          </div>
        </div>
      </div>
    </div>
  );
});

export { ChangeTheme, setTheme };
