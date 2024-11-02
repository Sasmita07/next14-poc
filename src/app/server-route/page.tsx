import ImageSlider from "@/components/image-slider";
import { serverComponents } from "../utils/server-utils";

export default function ServerPage() {
    console.log('ServerPage')
    const result = serverComponents();
    return (<>
        <h2>Server Route Page</h2>
        <ImageSlider></ImageSlider>
        <p>{result}</p>
    </>)
        
}   
    