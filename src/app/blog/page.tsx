import {Metadata} from 'next';

export const metadata: Metadata = {
    title: {
        absolute: 'blog'
    },
}

export default function Blog() {
    return <h2>My Blog</h2>
}