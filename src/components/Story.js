import React from 'react';
import './Story.css';
import { ButtonInline } from './Button';
import { connect } from 'react-redux';
import { doArchiveStory } from '../actions/archive';

const Story = ({ story, columns, onArchive }) => {
    console.log(columns);
    const {
        title,
        url,
        author,
        num_comments,
        points,
        objectID
    } = story;

    return (
        <div className="story">
            <span style={{ wiidth: columns.title.width }}>
                <a href={url}>{title}</a>
            </span>
            <span style={{ wiidth: columns.author.width }}>
                {author}
            </span>
            <span style={{ wiidth: columns.comments.width }}>
                {num_comments}
            </span>
            <span style={{ wiidth: columns.points.width }}>
                {points}
            </span>
            <span style={{ width: columns.archive.width }}>
                <button type="button"
                    className="button-inline"
                    onClick={() => onArchive(objectID)}>
                </button>
                <ButtonInline onClick={() => onArchive(objectID)}>
                    Archive
                </ButtonInline>
            </span>
        </div>
    )
};

const mapDispatchToProps = dispatch => ({
    onArchive: id => dispatch(doArchiveStory(id))
});

export default connect(
    null,
    mapDispatchToProps
)(Story);
