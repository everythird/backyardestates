'use client'

import { useState } from 'react'

import Link from 'next/link'

import Button from '@/components/Button'
import Dropdown from '@/components/Dropdown'
import Logo from '@/components/Logo'
import Menu from '@/components/Menu'

import style from './Nav.module.css'

export default function Nav() {
    const [showMenu, setShowMenu] = useState(false)

    return (
        <>
            <Menu showMenu={showMenu} toggleMenu={setShowMenu} />
            <nav className={style.page}>
                <div className={style.container}>
                    <div className={style.left}>
                        <Logo mode={'light'} />
                    </div>
                    <ul className={style.links}>
                        <li>
                            <Link href="/gallery" className={style.link}>
                                Gallery
                            </Link>
                        </li>
                        <li>
                            <Link href="/pricing" className={style.link}>
                                Pricing
                            </Link>
                        </li>
                        <li>
                            <Dropdown isHomepage={true} label="Company">
                                <ul>
                                    <li>
                                        <Link href="/about-us">About us</Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us/our-team">
                                            Our team
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/about-us/our-process">
                                            Our process
                                        </Link>
                                    </li>
                                    <li>
                                        <Link href="/roi">
                                            Return On Investment (ROI)
                                        </Link>
                                    </li>
                                </ul>
                            </Dropdown>
                        </li>
                    </ul>
                    <div className={style.right}>
                        <div className={style.cta}>
                            <Button isPrimary href="/talk-to-an-adu-specialist">
                                Talk to an ADU specialist
                            </Button>
                        </div>

                        <div
                            className={style.menu_light}
                            onClick={() => {
                                setShowMenu(true)
                            }}
                        >
                            <span className={style.label}>Menu</span>
                            <svg
                                width="20"
                                height="28"
                                viewBox="0 0 20 28"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M0 6H20"
                                    stroke="#5E5E5E"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    className={style.icon_hamburger_bar}
                                />
                                <path
                                    d="M0 14H20"
                                    stroke="#5E5E5E"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    className={style.icon_hamburger_bar}
                                />
                                <path
                                    d="M0 22H20"
                                    stroke="#5E5E5E"
                                    strokeWidth="2"
                                    strokeLinejoin="round"
                                    className={style.icon_hamburger_bar}
                                />
                            </svg>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}