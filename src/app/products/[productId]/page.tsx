export default function ProductDetails({params} : {params: {productId: string}}) {
    return <h2>Details about Product {params.productId}</h2>
} 