// const initialState = {
// 	title: '', 
// 	grade_level: '', 
// 	subject: '', 
// 	total_time: '', 
// 	objective: '', 
// 	materials: '', 
// 	summary: '', 
// 	other: '',
// }

// export default (state = initialState, action) => {
// 	switch(action.type) {
// 		case 'GET_LESSONS':
// 		console.log(action.lessons)
// 			return {
// 				...state,
// 				lessons : action.lessons
// 			}
// 		case 'ADD_LESSON':
// 			return state.concat(action.lesson);

// 		default:
// 			return state;
// 	}
// }

const lessonsReducer = (state = [], action) => {
	switch(action.type) {
		case 'GET_LESSONS':
			return state.concat(action.lessons)
		default:
			return state;
	}
}

export default lessonsReducer;