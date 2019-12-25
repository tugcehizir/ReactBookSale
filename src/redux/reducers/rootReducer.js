import { combineReducers } from 'redux';
import bookReducer from './bookReducer';

const reducers = combineReducers({ app: bookReducer});

export default reducers;