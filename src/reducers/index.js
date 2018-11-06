import { combineReducers } from 'redux';
import lessonPlanReducer from './lessonReducer';

export default combineReducers({
	lesson_plans: lessonPlansReducer
});