import "./App.scss";
import Header from "./components/Header";
import Characters from "./components/Characters";
import { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";

function App() {
	const [darkMode, setDarkMode] = useState(false);
	const backColor = darkMode ? " bg-dark text-light" : " bg-light text-dark";
	return (
		<>
			<div className={"App" + backColor}>
				<Header darkMode={darkMode} onClick={() => setDarkMode(!darkMode)} />
				<Characters />
			</div>
		</>
	);
}

export default App;
