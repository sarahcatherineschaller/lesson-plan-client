import { resetFormData } from './lessonForm';

const setLessons = lessons => {
	return {
		type: 'GET_LESSONS',
		lessons
	}
}

const addLesson = lesson => {
	return {
		type: 'CREATE_LESSON',
		lesson
	}
}

export const removeLesson = lesson => {
	return {
		type: 'REMOVE_LESSON',
		lesson
	}
}


// const editLesson = lesson => {
// 	return {
// 		type: 'EDIT_LESSON',
// 		lesson
// 	}
// }


export const getLessons = () => {
	return dispatch => {
		return fetch('http://localhost:3001/api/v1/lesson_plans')
		.then(response => response.json())
		.then(lessons => {
			dispatch(setLessons(lessons))
		})
		.catch(error => console.log(error))
	}
}

export const getLesson = (lessonId) => {
	return dispatch => {
		return fetch(`http://localhost:3001/api/v1/lesson_plans/${lessonId}`)
		.then(response => response.json())
		.then(lesson => { 
			dispatch(setLessons([lesson])) 
		})
		.catch(error => console.log(error))
	}
}

export const createLesson = lesson => {
	return dispatch => {
		return fetch('http://localhost:3001/api/v1/lesson_plans', {
			method: "POST",
			headers: {
				"Content-Type": "application/json"
			},
			body: JSON.stringify(lesson)
		})
			.then(response => response.json())
			.then(lesson => {
				dispatch(addLesson(lesson))
				dispatch(resetFormData()) 
			})

			.catch(error => console.log(error))
	}
}

export const deleteLesson = (lessonId, routerHistory) => {
	return dispatch => {
		return fetch(`http://localhost:3001/api/v1/lesson_plans/${lessonId}`, {
			method: "DELETE"
		})
		.then(response => {
			dispatch(removeLesson(lessonId));
			routerHistory.replace('/lessons');
		})
		.catch(error => console.log(error))
	}
}

// export const updateLesson = (lesson, history) => {
// 	return dispatch => {
// 		return fetch(`http://localhost:3001/api/v1/lesson_plans/${lesson.id}`, {
// 			method: "PATCH",
// 			headers: {
// 				"Content-Type": 'application:json'
// 			},
// 			body: JSON.stringify({ lesson: lesson })
// 		})
// 			.then(response => response.json())
// 			.then(lesson => {
// 				dispatch(editLesson(lesson)) 
// 			})
// 			.catch(error => console.log(error))
// 	}
// }