import { cookies } from "next/headers";

export const metadata = {
    "title": "About Section"
}
export  default function About() {
    console.log("Server Side");
    const cookieStorage = cookies();
    const theme = cookieStorage.get('theme');
    console.log('theme--->', theme);
    return <h2>About Page {new Date().toLocaleTimeString()}</h2>
}