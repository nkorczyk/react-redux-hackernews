import { STORY_ARCHIVE } from './actionTypes';

const doArchiveStory = (id) => ({
    type: STORY_ARCHIVE,
    id
});

export {
    doArchiveStory
}
