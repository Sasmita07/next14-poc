import { Suspense } from "react";
import { Property } from "@/components/property";
import { PropertyReviews } from "@/components/property-reviews";

export default function PropertyDetail() {
    return (
        <>
            <h2>Proeprty Details Page</h2>
            {/* @ts-expect-error Server Component */}
            <Suspense fallback={<p>Loading Property Page</p>}><Property/></Suspense>
            {/* @ts-expect-error Server Component */}
            <Suspense fallback={<p>Loading Property Review Page</p>}><PropertyReviews/></Suspense>
        </>
    )
}