import {Metadata} from 'next';

type PageProps = {
    params: {
        productId: string
    }
} 

export const generateMetadata = async ({params}: PageProps): Promise<Metadata> => {
    const title = await new Promise((resolve, _) => {
        setTimeout(() => resolve(`New Edition ${params.productId}`), 1000)
    })

    return {
        title: `Product ${title}`
    }
}


export default function ProductDetails({params} : PageProps) {
    return <h2>Details about Product {params.productId}</h2>
} 