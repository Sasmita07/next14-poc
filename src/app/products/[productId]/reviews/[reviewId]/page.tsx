'use client'
import { getRandomValue } from "@/app/_lib/random-number-generator";
import { notFound } from "next/navigation"

export default function ReviewDetails({params} : { params: {productId: string, reviewId: string}}) {
    const random = getRandomValue(2);
    if(random === 1){
        throw new Error('Error loading review');
    }
    if(parseInt(params.reviewId)> 1000){
        notFound();
    }
    return <h2>Review Details of product {params.productId} is {params.reviewId}</h2>
}