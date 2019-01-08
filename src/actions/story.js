import { STORIES_ADD, STORIES_FETCH, STORIES_FETCH_ERROR } from '../actions/actionTypes';

const doAddStories = stories => ({
    type: STORIES_ADD,
    stories
});

const doFetchSories = query => ({
    type: STORIES_FETCH,
    query
});

const doFetchErrorSories = error => ({
    type: STORIES_FETCH_ERROR,
    error
});

export {
    doAddStories,
    doFetchSories,
    doFetchErrorSories
};
