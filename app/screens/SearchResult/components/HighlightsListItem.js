import React from 'react';
import PropTypes from 'prop-types';

export default HighlightsListItem;

function HighlightsListItem({highlight}) {
  return (
    <li>
      <div className="content" dangerouslySetInnerHTML={{__html: highlight}} />
    </li>
  );
}

HighlightsListItem.propTypes = {
  highlight: PropTypes.string
};

HighlightsListItem.defaultProps = {
  highlight: {}
};
