import { notFound } from "next/navigation"

export default function ReviewDetails({params} : { params: {productId: string, reviewId: string}}) {
    if(parseInt(params.reviewId)> 1000){
        notFound();
    }
    return <h2>Review Details of product {params.productId} is {params.reviewId}</h2>
}