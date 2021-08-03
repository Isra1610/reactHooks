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
			<div className="header__container">
				<div className="nameContainer">
					<h1>ReactHooks</h1>
				</div>
				<div className="botonContainer">
					<button
						className="boton"
						type="button"
						onClick={() => props.onClick()}
					>
						{props.darkMode ? "Light Mode" : "Drak Mode"}
					</button>
				</div>
			</div>
		</div>
	);
};

export default Header;
