import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { STORY_ARCHIVE } from './actions/actionTypes';
import { getReadableStories } from './selectors/story';

ReactDOM.render(<App
    stories={getReadableStories(store.getState())}
    onArchive={id => {
        store.dispatch({ type: STORY_ARCHIVE, id })
    }} />,
    document.getElementById('root'));

serviceWorker.unregister();
