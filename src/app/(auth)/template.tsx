'use client'
import { useState } from 'react';
import './styles.css';


export default function AuthTemplate(){
   const [input, setInput] = useState("");
    
    return (
        <div>
            <div className="w-full max-w-sm min-w-[200px]">
                <input value={input} 
                    className="w-full bg-transparent placeholder:text-slate-400 text-slate-700 text-sm border border-slate-200 rounded-md px-3 py-2 transition duration-300 ease focus:outline-none focus:border-slate-400 hover:border-slate-300 shadow-sm focus:shadow"
                    onChange= {(e) => setInput(e.target.value)}
                />
           </div>            
        </div>
    )
}