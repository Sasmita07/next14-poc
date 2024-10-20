import Card from "@/components/card";
import Link from "next/link";

export default function Park(){
    return (
        <>
            <Card>Park Page</Card>
            <Link href="/foo/fizz">Fizz</Link>
            <br/>
            <Link href="/about">About</Link>
        </>
    )
    
}