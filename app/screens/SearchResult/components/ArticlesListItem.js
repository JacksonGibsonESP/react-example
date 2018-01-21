import React, {PropTypes} from 'react';
import HighlightsList from "./HighlightsList";

export default ArticlesListItem;

function ArticlesListItem({article}) {
  return (
    <li className="border-bottom">
      <h4>{article._id}</h4>
      <HighlightsList highlights={article.highlights} />
    </li>
  );
}

ArticlesListItem.propTypes = {
  article: PropTypes.shape({
    _id: PropTypes.string,
  }),
};

ArticlesListItem.defaultProps = {
  article: {},
};
