export default function ReviewDetails({params} : { params: {productId: string, reviewId: string}}) {
    return <h2>Review Details of product {params.productId} is {params.reviewId}</h2>
}