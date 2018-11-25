import Link from 'next/link'
import Markdown from 'react-markdown'
import CodeBlock from '../renderers/CodeBlock'

const mdx = '# Hello World\n\n```csharp\nConsole.WriteLine("Hello World");\n```\n\n*more testing*'

const Index = () => (
    <div>
        <p>Hello World!</p>
        <div>
            <Markdown renderers={{code: CodeBlock}} source={mdx}/>
        </div>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </div>
)

export default Index