import React, { useState, useEffect, useReducer, useMemo, useRef } from "react";
import "./styles/Characters.scss";

const initialState = {
	favorites: [],
};

const favoriteReducer = (state, action) => {
	switch (action.type) {
		case "ADD_TO_FAVORITE":
			return {
				...state,
				favorites: [...state.favorites, action.payload],
			};
		default:
			return state;
	}
};

const Characters = () => {
	const [characters, setCharacters] = useState([]);
	const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
	const [search, setSearch] = useState("");
	const searchInput = useRef(null);

	useEffect(() => {
		fetch("https://rickandmortyapi.com/api/character")
			.then((response) => response.json())
			.then((data) => setCharacters(data.results));
	}, []);

	const handdleClick = (favorite) => {
		dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
	};

	const handleSearch = () => {
		setSearch(searchInput.current.value);
	};

	/* const filteredUsers = characters.filter((user) => {
		return user.name.toLowerCase().includes(search.toLocaleLowerCase());
	}); */

	const filteredUsers = useMemo(
		() =>
			characters.filter((user) => {
				return user.name.toLowerCase().includes(search.toLocaleLowerCase());
			}),
		[characters, search]
	);

	return (
		<div>
			<div className="Search">
				<h3>Search...</h3>
				<input
					type="text"
					value={search}
					ref={searchInput}
					onChange={handleSearch}
				/>
			</div>

			<ul className="Characters list row ">
				{favorites.favorites.map((favorite) => (
					<li
						className="list-item col-sm-4 col-md-2 col-lg-2 px-0"
						key={favorite.id}
					>
						<div className="list-item__info">
							<img src={favorite.image} alt="logo" />
							<p>
								<b>{favorite.name}</b>
							</p>
						</div>
					</li>
				))}

				{filteredUsers.map((character) => (
					<li
						className="list-item col-sm-4 col-md-2 col-lg-2 px-0"
						key={character.id}
					>
						<div className="list-item__info">
							<img src={character.image} alt="logo" />
							<p className="nameCss">
								<b>{character.name}</b>
								<button
									type="button"
									onClick={() => handdleClick(character)}
									className="addButton"
								>
									Add to Favorite
								</button>
							</p>
						</div>
					</li>
				))}
			</ul>
		</div>
	);
};

export default Characters;
