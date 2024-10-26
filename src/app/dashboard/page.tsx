// function BarChart() {
//     return <h2>This is Bar Chart</h2>
// }
"use client";
import { useState } from "react";

export default function Dashboard(){
    console.log("Dashboard Client Side");
    
    const [name, setName] = useState("");
    return <>
        <h2>Hello DashBoard</h2>
        <input value={name} 
        onChange= {(e) => setName(e.target.value)}/>
        <p>Hello! {name}</p>
    </>
}