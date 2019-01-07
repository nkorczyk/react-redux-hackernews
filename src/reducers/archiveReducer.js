import { STORY_ARCHIVE } from '../actions/actionTypes';

const INITIAL_STATE = [];

function archiveReducer(state = INITIAL_STATE, action) {
    switch (action.type) {
        case STORY_ARCHIVE:
            return applyArchiveStory(state, action);
        default: return state;
    }
}

const applyArchiveStory = (state, action) => {
    return [
        ...state,
        action.id
    ];
}

export default archiveReducer;
