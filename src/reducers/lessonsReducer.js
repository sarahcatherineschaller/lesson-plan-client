

const lessonsReducer = (state = [], action) => {
	switch(action.type) {
		case 'GET_LESSONS':
			return state.concat(action.lessons)
		case 'ADD_LESSON':
			return state.concat(action.lesson)
		default:
			return state;
	}
}

export default lessonsReducer;