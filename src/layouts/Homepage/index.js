import { useState } from 'react'

import { useInView } from 'react-intersection-observer'
import { Roboto, Roboto_Slab } from 'next/font/google'
import Head from 'next/head'

const roboto = Roboto({
    variable: '--font-sans',
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
})

const robotoSlab = Roboto_Slab({
    variable: '--font-serif',
    subsets: ['latin'],
    weight: ['100', '300', '400', '500', '700', '900'],
})

export const metadata = {
    title: 'Backyard Estates',
    description:
        'Backyard Estates - Premier Accessory Dwelling Unit (ADU) builder for the greater Los Angeles area.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import Hero from '@/components/Hero'
import Menu from '@/components/Menu'

export default function Homepage({ children }) {
    const { ref, inView } = useInView()
    const [showMenu, setShowMenu] = useState(false)

    function toggleMenu() {
        setShowMenu(!showMenu)
    }

    return (
        <div className={`${roboto.variable} ${robotoSlab.variable}`}>
            <Head>
                <meta
                    name="viewport"
                    content="width=device-width; initial-scale=1.0"
                />
            </Head>
            <Menu showMenu={showMenu} toggleMenu={toggleMenu} />
            <Navbar
                toggleMenu={toggleMenu}
                isHomepage={true}
                mode={inView ? 'dark' : 'light'}
            />
            <div ref={ref}>
                <Hero />
            </div>
            <main>{children}</main>
            <Footer />
        </div>
    )
}
