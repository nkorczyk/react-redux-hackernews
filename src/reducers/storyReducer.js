import { STORIES_ADD, STORIES_FETCH_ERROR } from '../actions/actionTypes';

const INITIAL_STATE = {
    stories: [],
    error: null
};


function storyReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case STORIES_ADD: {
            return applyAddStories(state, action);
        }
        case STORIES_FETCH_ERROR: {
            return applyFetchErrorStories(state, action)
        }
        default: return state;
    }
}

const applyAddStories = (state, action) => ({
    stories: action.stories,
    error: null
});

const applyFetchErrorStories = (state, action) => ({
    stories: [],
    error: null
});

export default storyReducer;
