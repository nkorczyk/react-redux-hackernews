import { STORIES_ADD, STORIES_FETCH } from '../actions/actionTypes';

const doAddStories = stories => ({
    type: STORIES_ADD,
    stories
});

const doFetchSories = query => ({
    type: STORIES_FETCH,
    query
});

export {
    doAddStories,
    doFetchSories
}
