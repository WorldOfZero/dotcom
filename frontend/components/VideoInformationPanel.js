import { withStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Markdown from 'react-markdown'
import CodeBlock from '../renderers/CodeBlock'
import YouTube from 'react-youtube'

const mdx = '# Hello World\n\n```csharp\nConsole.WriteLine("Hello World");\n```\n\n*more testing* what about word wrapping? How does that work? Maybe it will actually justify like I want... but maybe not.'

export default class VideoInformationPanel extends React.Component {

  render() {
    return (
      <Grid container>
        <Grid item md={8} xs={12}>
          <YouTube videoId="_08No6ET-qk"/>
        </Grid>
        {/* Justify the markdown description. */}
        <Grid style={{ textAlign: 'justify' }} item md={4} xs={12}>
          <Markdown renderers={{code: CodeBlock}} source={mdx}/>
        </Grid>
      </Grid>
    )
  }
}