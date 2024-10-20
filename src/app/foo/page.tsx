import Card from "@/components/card";
import Link from "next/link";

export default function Foo(){
    return ( 
        <>
            <Card>Foo</Card>
            <Link href="/foo/bar">Bar</Link>
        </>
    )
}