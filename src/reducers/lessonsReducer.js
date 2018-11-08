

const lessonsReducer = (state = [], action) => {
	switch(action.type) {
		case 'GET_LESSONS':
			return state.concat(action.lessons)
		case 'ADD_LESSON':
			return state.concat(action.lesson)
		case 'REMOVE_LESSON':
			return state.filter(lesson => lesson.id !== action.lessonId);
		// case 'EDIT_LESSON':
		// 	return state.map(lesson => {
		// 		if (lesson.id === action.lesson.id) {
		// 			return action.lesson
		// 		} else {
		// 			return lesson
		// 		}
			// })
		default:
			return state;
	}
}

export default lessonsReducer;