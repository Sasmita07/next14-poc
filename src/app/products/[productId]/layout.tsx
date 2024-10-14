'use client'
import { getRandomValue } from "@/app/_lib/random-number-generator";

export default function ProductDetailsLayout({children }: {children: React.ReactNode}){
    const random = getRandomValue(2);
    if(random === 1){
        throw new Error('Error loading product');
    }
    return (
        <div style={{color: 'blue'}}>
        {children}
        <p>Feature Product</p>
        </div>
    )
}