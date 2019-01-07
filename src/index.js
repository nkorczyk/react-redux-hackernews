import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import store from './store';
import { getReadableStories } from './selectors/story';
import { doArchiveStory } from './actions/archive';

function render() {
    ReactDOM.render(<App
        stories={getReadableStories(store.getState())}
        onArchive={id => {
            store.dispatch(doArchiveStory(id))
        }} />,
        document.getElementById('root'));
}

store.subscribe(render);
render();
serviceWorker.unregister();
