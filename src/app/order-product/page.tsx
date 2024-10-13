'use client'
import {useRouter} from 'next/navigation'

export default function OrderProduct() {
    const router = useRouter();

    const handleClick = () => {
        console.log("Placing the order");
        router.push("/"); //check forward, replace, back options
    }
    return (
        <>
            <h2>Oder Product Page</h2>
            <button onClick={handleClick}>Place Order</button>
        </>
    )
}