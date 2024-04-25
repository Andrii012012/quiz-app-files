import React from "react";
import "./headerStyle.css";
import "./headerMedia.css";
import { ChangeTheme } from "../ChangeTheme/ChangeTheme.jsx";
import { memo } from "react";

const Header = memo((props) => {
  let {} = props;

  return (
    <header className="header">
      <ChangeTheme />
    </header>
  );
});

export { Header };
