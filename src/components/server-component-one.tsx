import fs from 'fs';
import { ClientComponentOne } from './client-component-one';
import { ServerComponentTwo } from './server-component-two';
export const ServerComponentOne =  () => {
    fs.readFileSync('src/components/server-component-one.tsx', 'utf-8')
    return <>
    <div>Server Component One</div>
    <ServerComponentTwo/>
    {/* <ClientComponentOne/> */}
    </>
};