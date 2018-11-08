import { createStore, applyMiddleware, combineReducers, compose } from 'redux'
import thunk from 'redux-thunk';
import lessonsReducer from './reducers/lessonsReducer';
import lessonFormData from './reducers/lessonFormData';


const reducers = combineReducers({
	lessonsReducer,
	lessonFormData,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION__COMPOSE || compose;

export default createStore(
	reducers,
	composeEnhancers(applyMiddleware(thunk))
);