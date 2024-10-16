'use client'
import Link from 'next/link';
import {usePathname} from 'next/navigation'
import './styles.css'

const navLinks = [
    {
        name: 'Register', href: '/register'
    },
    {
        name: 'Login', href: '/login'
    },
    {
        name: 'Forgot Password', href: '/forgot-password',
    }
]

export default function AuthLayout({children }: {children: React.ReactNode}){
    const pathname = usePathname()
    
    return (
        <div>
            <p style={{color: 'purple', marginTop: '2rem'}}>Auth Layout Example:</p>
            {
                navLinks.map((navLink) => {
                    const isActive = pathname.startsWith(navLink.href)
                    return (
                        <Link href={navLink.href} key= {navLink.name}
                        className= {isActive? 'font-bold mr-4' : 'text-blue-500 mr-4'}>
                        {navLink.name}
                        </Link>
                    )
                })
            }
            
           {children}
        </div>
    )
}