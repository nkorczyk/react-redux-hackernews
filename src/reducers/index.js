import { combineReducers } from 'redux';
import archiveReducer from './archiveReducer';
import storyReducer from './storyReducer';

const rootReducer = combineReducers({
    storyState: storyReducer,
    archiveState: archiveReducer,
});

export default rootReducer;
