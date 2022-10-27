import React from 'react';

const SearchBar = () => {
	return (
		<>
			<input
				className="placeholder:font-extralight shadow-lg outline-none border-zinc-100 py-2 px-5 rounded-lg border-solid border-2 hover:border-zinc-200"
				type="text"
				placeholder="Search products here"/>
		</>
	);
};

export default SearchBar;
