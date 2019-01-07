import { createStore } from 'redux';
import storyReducer from '../reducers/storyReducer';

const store = createStore(
    storyReducer
);

export default store;
