import React, { useState, useEffect } from "react";
import "./styles/Characters.scss";

const Characters = () => {
	const [characters, setCharacters] = useState([]);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => setCharacters(data.results));
	}, []);

	return (
		<ul className="Characters list row ">
			{characters.map((character) => (
				<li
					className="list-item col-sm-4 col-md-2 col-lg-2 px-0"
					key={character.id}
				>
					<div className="list-item__info">
						<img src={character.image} alt="logo" />
						<p>
							<b>{character.name}</b>
						</p>
						{/* <p>Status: {character.status}</p>
						<p>Species: {character.species}</p>
						<p>Gender: {character.gender}</p> */}
					</div>
				</li>
			))}
		</ul>
	);
};

export default Characters;
