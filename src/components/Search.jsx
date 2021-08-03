import React from "react";
import { GiMagnifyingGlass } from "react-icons/gi";

const Search = ({ search, searchInput, handleSearch }) => {
	return (
		<div className="Search">
			<h3>Users...</h3>
			<div className="searchContainer">
				<div className="searchIcon">
					<GiMagnifyingGlass />
				</div>
				<input
					type="text"
					value={search}
					ref={searchInput}
					onChange={handleSearch}
				/>
			</div>
		</div>
	);
};

export default Search;
