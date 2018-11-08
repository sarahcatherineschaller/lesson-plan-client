export const updateLessonFormData = lessonFormData => {
	return {
		type: 'UPDATE_LESSON',
		lessonFormData
	}
}


export const resetFormData = () => {
	return {
		type: 'RESET_FORM'
	}
}