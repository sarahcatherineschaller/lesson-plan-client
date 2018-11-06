
export default (state = {}, action) => {
	switch(action.type) {
		case 'GET_LESSONS':
		console.log(action)
			return {
				...state,
				lessons : action.lessons
			}
		case 'ADD_LESSON':
			return state.concat(action.lesson);

		default:
			return state;
	}
}