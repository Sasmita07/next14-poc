'use client'

import { useState } from "react";

export const ClientComponentTwo =  () => {
    const [name, setName] = useState("World");
    return <div>Client Component Two</div>;
};