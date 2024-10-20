import Card from "@/components/card";
import Link from "next/link";

export default function BeeHoney(){
    return (
        <>
            <Card>BeeHoney Page</Card>
            <Link href="/foo/fizz">Fizz</Link>
        </>
    )
}