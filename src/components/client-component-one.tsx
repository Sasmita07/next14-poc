'use client'

import React, { useState } from "react";
import { ClientComponentTwo } from "./client-component-two";

export const ClientComponentOne =  ({children}: {children: React.ReactNode}) => {
    const [name, setName] = useState("Hello");
    return <>
    <div>Client Component One</div>
    <ClientComponentTwo/>
    {children}
    </>;
};