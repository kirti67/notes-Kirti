import React from 'react';

const Search = ({ handleSearchNote }) => {
	return (
		<div className='search'>
			<i className="fa-solid fa-magnifying-glass" style={{fontSize:"1.3rem"}}></i>
			<input
				onChange={(event) =>
					handleSearchNote(event.target.value)
				}
				type='text'
				placeholder='type to search...'
			/>
		</div>
	);
};

export default Search;
