export default function NAAuthLayout({children }: {children: React.ReactNode}){
    return (
        <>
         <p style={{color: 'purple', marginTop: '2rem'}}>Auth Layout Example:</p>
        {children}
        </>
    )
}