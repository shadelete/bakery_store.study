import React from 'react';

const SearchBar = () => {
	return (
		<div className="mx-auto w-full max-w-xs pt10 mt-20 min-h-full">
			<input
				type="text"
				name="searchBar"
				id="searchBar"
				className="block w-full rounded-md border-gray-300 pl-7 pr-12 focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
				placeholder="Search items here"
			/>
		</div>
	);
};

export default SearchBar;