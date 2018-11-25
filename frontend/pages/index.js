import Link from 'next/link'

const Index = () => (
    <div>
        <p>Hello World!</p>
        <p>
            <Link href="/about">
                <a>About</a>
            </Link>
        </p>
    </div>
)

export default Index