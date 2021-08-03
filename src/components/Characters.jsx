import React, {
	useState,
	useReducer,
	useMemo,
	useRef,
	useCallback,
} from "react";
import Search from "./Search";
import useCharacters from "../hooks/useCharacters";

import "./styles/Characters.scss";

const initialState = {
	favorites: [],
};

const API = "https://rickandmortyapi.com/api/character";

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
	const [favorites, dispatch] = useReducer(favoriteReducer, initialState);
	const [search, setSearch] = useState("");
	const searchInput = useRef(null);

	const characters = useCharacters(API);

	const handdleClick = (favorite) => {
		dispatch({ type: "ADD_TO_FAVORITE", payload: favorite });
	};

	/* const handleSearch = () => {
		setSearch(searchInput.current.value);
	}; */

	const handleSearch = useCallback(() => {
		setSearch(searchInput.current.value);
	}, []);

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
			<Search
				search={search}
				searchInput={searchInput}
				handleSearch={handleSearch}
			/>
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
