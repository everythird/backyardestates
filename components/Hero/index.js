'use client'

import { useRef } from 'react'
import Image from 'next/image'
import { gsap } from 'gsap/dist/gsap'
import { TextPlugin } from 'gsap/dist/TextPlugin'
import { useGSAP } from '@gsap/react'
import Button from '../Button'
import style from './Hero.module.css'

import heroBackgroundImage from '../../public/images/hero-adu-optimized.webp'

gsap.registerPlugin(TextPlugin)

export default function Hero() {
    const phrases = [
        'bring parents closer',
        'house family members',
        'generate rental income',
        'create a hobby studio',
        'create an office',
    ]

    const titleRef = useRef()
    const phraseRef = useRef()
    const cursorRef = useRef()

    useGSAP(
        () => {
            gsap.to(cursorRef.current, {
                opacity: 0,
                repeat: -1,
                yoyo: true,
                duration: 0.5,
                ease: 'power2.inOut',
            })

            let masterTimeline = gsap.timeline({ repeat: -1 })

            phrases.forEach((phrase) => {
                let textTimeline = gsap.timeline({
                    repeat: 1,
                    yoyo: true,
                    repeatDelay: 2,
                })
                textTimeline.to(phraseRef.current, {
                    duration: 2,
                    text: phrase,
                })
                masterTimeline.add(textTimeline, '>1')
            })
        },
        { scope: titleRef }
    )

    return (
        <div className={style.base} onScroll={() => alert('Table Scrolled')}>
            <div className={style.bgWrap}>
                <Image
                    alt="Accessory Dwelling Unit (ADU)"
                    src={heroBackgroundImage}
                    placeholder="blur"
                    quality={100}
                    fill
                    sizes="100vw"
                    style={{
                        objectFit: 'cover',
                    }}
                    priority={true}
                />
            </div>
            <div className={style.content}>
                <h1 ref={titleRef}>
                    <span className={style.title}>Build an ADU to</span>
                    <span ref={phraseRef}></span>
                    <span ref={cursorRef}>_</span>
                </h1>
                <p className={style.intro}>
                    Backyard Estates - Premier Accessory Dwelling Unit (ADU)
                    builder for the greater Los Angeles area.
                </p>
                <Button href="/talk-to-an-adu-specialist" isPrimary={false}>
                    Talk to an ADU specialist
                </Button>
            </div>
        </div>
    )
}
