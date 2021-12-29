import { combineReducers } from 'redux';
import counterReducer  from './counters/counterReducer';

export default combineReducers({
    counter: counterReducer
});