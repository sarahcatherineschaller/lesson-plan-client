import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import lessons from './reducers/lessons';
import lessonFormData from './reducers/lessonFormData';
import lessonEditData from './reducers/lessonEditData';


const reducers = combineReducers({
	lessons,
	lessonFormData,
	lessonEditData
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export default createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);