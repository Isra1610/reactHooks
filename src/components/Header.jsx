import React /* , { useState, useContext } */ from "react";
/* import ThemeContext from "../context/ThemeContext"; */
import "./styles/Header.scss";

const Header = (props) => {
	/* const color = useContext(ThemeContext);
	const handleClick = () => {
		setDarkMode(!darkMode);
	}; */

	return (
		<div className="Header" /* id={backColor} */>
			<h1>ReactHooks</h1>
			<div className="button__container">
				<button className="boton" type="button" onClick={() => props.onClick()}>
					{props.darkMode ? "Light Mode" : "Drak Mode"}
				</button>
			</div>
		</div>
	);
};

export default Header;
