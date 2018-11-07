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
		console.log("hi")
		.then(lesson => { dispatch(setLessons([lesson])) })
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
			.then(lesson => dispatch(addLesson(lesson)))
			.catch(error => console.log(error))
	}
}