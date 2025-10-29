"use client"

import { Sheet, SheetContent, SheetTitle, SheetTrigger } from '@/components/ui/sheet'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { CiMenuFries } from 'react-icons/ci'
import Nav from './Nav'

const links = [
    {
        name: 'home',
        path: "/"
    },
    {
        name: 'services',
        path: "/services"
    },
    {
        name: 'about',
        path: "/resume"
    },
    // {
    //     name: 'work',
    //     path: "/work"
    // },
    // {
    //     name: 'contact',
    //     path: "/contact"
    // },
]


const MobileNav = () => {
    const pathName = usePathname()

    return (
        <Sheet>
            <SheetTitle>
                {/* Supaya ga muncul warning */}
            </SheetTitle>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-accent-hover"/>
            </SheetTrigger>
            <SheetContent>
                {/* logo */}
                <div className="mt-32 mb-40 text-center text-2xl">
                    <Link href="/">
                        <h1 className="text-4xl font-semibold">Famuh<span className="text-accent-hover">.</span></h1>
                    </Link>
                </div>

                {/* Nav */}
                <nav className="flex flex-col justify-center items-center gap-8">
                    {
                        links.map((link, index) => {
                            return <Link href={link.path} key={index} className={`${link.path == pathName && 'text-accent-hover border-accent-hover border-b-2'} text-xl capitalize hover:text-accent-hover transition-all`}>{link.name}</Link>

                        })
                    }
                </nav>



            </SheetContent>
        </Sheet>
    )
}

export default MobileNav