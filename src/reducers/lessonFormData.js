const initialState = {
	title: '', 
	grade_level: '', 
	subject: '', 
	total_time: '', 
	objective: '', 
	materials: '', 
	summary: '', 
	other: '',
}

export default (state = initialState, action) => {
	switch(action.type) {
		case 'UPDATE_LESSON':
			return action.lessonFormData 
		case 'RESET_FORM':
			return initialState;

		default:
			return state;
	}
}
