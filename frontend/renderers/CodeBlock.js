// Based on source from @ibrahima: https://gist.github.com/ibrahima/d21950a95aee3212e991a8404e238093

import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';

export default class CodeBlock extends React.PureComponent {
  static propTypes = {
    value: PropTypes.string.isRequired,
    language: PropTypes.string,
  }

  static defaultProps = {
    language: null,
  }

  render() {
    const { language, value } = this.props;

    return (
      <SyntaxHighlighter language={language}>
        {value}
      </SyntaxHighlighter>
    );
  }
}