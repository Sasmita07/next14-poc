export default function Docs({params} : {params: {slug: string[]}}) {
    if(params.slug?.length ==2){
        return <h2>Viewing Docs for feature {params.slug[0]} and concept of {params.slug[1]} Page</h2>
    } else if(params.slug?.length ==1){
        return <h2>Viewing Docs for feature {params.slug[0]} Page</h2>
    }
    return <h2>Docs Page</h2>
}