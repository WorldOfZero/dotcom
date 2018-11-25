import Markdown from 'react-markdown'
import CodeBlock from '../renderers/CodeBlock'

const mdx = '# Hello World\n\n```csharp\nConsole.WriteLine("Hello World");\n```\n\n*more testing*'

const markdown_tag = () => (<Markdown renderers={{code: CodeBlock}} source={mdx}/>)