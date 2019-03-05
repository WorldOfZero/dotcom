// Based on source from @ibrahima: https://gist.github.com/ibrahima/d21950a95aee3212e991a8404e238093

import React from 'react';
import PropTypes from 'prop-types';
import SyntaxHighlighter from 'react-syntax-highlighter';
import LanguageBar from '../components/LanguageBar'
import { languageMap } from '../src/languageMap';
import dark from 'react-syntax-highlighter/styles/hljs/dark';

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

    var languageData = undefined;
    if (language !== null && languageMap.hasOwnProperty(language.toString())) {
      languageData = languageMap[language.toString()];
    }

    return (
      <div>
        { languageData != undefined &&
          <LanguageBar name={languageData.name} color={languageData.color} link={languageData.link}/>
        }
        <SyntaxHighlighter language={language} style={dark}>
          {value}
        </SyntaxHighlighter>
      </div>
    );
  }
}