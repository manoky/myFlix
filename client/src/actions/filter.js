export const types = {
	SET_MOVIES: 'SET_MOVIES',
	SET_FILTER: 'SET_FILTER',
	SET_SORT_COLUMN: 'SET_SORT_COLUMN'
}

export const setMovies = value => ({
	type: types.SET_FILTER,
	value
});

export const setFilter = value => ({
	type: types.SET_FILTER,
	value
});

export const setSortColumn = value => ({
	type: types.SET_SORT_COLUMN,
	value
});