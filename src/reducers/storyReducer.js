import { STORIES_ADD } from '../actions/actionTypes';

const INITIAL_STATE = [];


function storyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case STORIES_ADD: {
            return applyAddStories(state, action);
        }
        default: return state;
    }
}

const applyAddStories = (state, action) => {
    return action.stories;
}

export default storyReducer;
