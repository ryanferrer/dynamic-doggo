import React from 'react';
import PropTypes from 'prop-types';

const returnHTML = (content) => ({ __html: content });

const Bloglet = (props) => (
    <div>
      <h1>Title: {props.article.title}</h1>
      <h4>By: {props.article.author.displayName}</h4>
      <div dangerouslySetInnerHTML={returnHTML(props.article.content)}></div>
    </div>
);

Bloglet.propTypes = {
  article: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.shape({
      displayName: PropTypes.string,
    }),
    content: PropTypes.string.isRequired,
  }),
};

export default Bloglet;