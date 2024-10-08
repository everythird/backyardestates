import type { Metadata } from 'next'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faCheck,
    faTriangleExclamation,
} from '@fortawesome/pro-light-svg-icons'

import Catchall from '@/components/Catchall'
import Chunk from '@/components/Chunk'
import Footer from '@/components/Footer'
import Masthead from '@/components/Masthead'
import Nav from '@/components/Nav'
// import OpenGraph from '@/components/OpenGraph'

import style from './page.module.css'

export const metadata: Metadata = {
    title: 'About us - Backyard Estates',
    description:
        'Our mission is to enable homeowners to make your ADU dreams a reality!',
}

export default function AboutUs() {
    return (
        <>
            {/* <OpenGraph title={`Backyard Estates - About us`} /> */}
            <Nav />
            <Masthead
                title="About us"
                explanation="Our mission is to enable homeowners to make your ADU dreams a reality!"
            />
            <main className="centered">
                <div className={style.content}>
                    <Chunk
                        image="/render.jpg"
                        title="Design, plans, and permitting"
                        imagePriority={true}
                    >
                        <p>
                            Backyard Estates&rsquo; mission is to enable anyone
                            who owns a house to make their backyard their
                            estate! Backyard Estates specializes in ADUs; we
                            handle every detail, so you don&rsquo;t have to!
                        </p>
                        <p>
                            Our proven, end-to-end, process allows us to provide
                            customers with accurate pricing upfront as well as
                            customized financing options.
                        </p>
                        <p>
                            We provide homeowners a hands-free experience and
                            save them tens of thousands of dollars by handling
                            all design, permitting, and construction in half the
                            time!
                        </p>
                    </Chunk>
                    <Chunk
                        image="/community.jpg"
                        imageRight={true}
                        title="Value to the community"
                    >
                        <p>
                            Backyard Estates is dedicated to helping solve the
                            housing crisis in California by making it easier and
                            quicker to build an ADU, while offering unmatched
                            pricing transparency!
                        </p>
                        <p>
                            With our proprietary ADU Formal Property Analysis,
                            we can ensure homeowners have the information needed
                            to know if an ADU is right for them, even before any
                            plans or permitting need to be paid.
                        </p>
                    </Chunk>
                    <Chunk image="/client.jpg" title="Why Backyard Estates">
                        <p>
                            We are experts in the ADU industry and provide the
                            following:
                        </p>
                        <ul>
                            <li>We handle everything with all-in pricing</li>
                            <li>
                                Quick and seamless property analysis and ADU
                                design
                            </li>
                            <li>Ground-up construction in 8-12 weeks!</li>
                            <li>
                                Partnered with the best off-site ADU
                                manufacturer in CA
                            </li>
                            <li>
                                Competitive pricing with unmatched timelines and
                                quality
                            </li>
                            <li>
                                Decades of experience in every aspect of your
                                ADU project
                            </li>
                            <li>
                                Our construction team is fast, efficient, and
                                accurate
                            </li>
                        </ul>
                    </Chunk>
                    <div className={style.benefit}>
                        <h2>Simply choose a floor plan and design package</h2>
                        <p>Backyard Estates will handle everything else</p>
                    </div>
                    <div className={style.pros_and_cons}>
                        <div className={style.pros}>
                            <h3>Backyard Estates</h3>
                            <ul>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={style.icon}
                                    />
                                    Accurate pricing upfront
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={style.icon}
                                    />
                                    Free designs
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={style.icon}
                                    />
                                    Financing options
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={style.icon}
                                    />
                                    100% of permits approved
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={style.icon}
                                    />
                                    Full project management
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={style.icon}
                                    />
                                    Solar
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={style.icon}
                                    />
                                    Guaranteed results
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faCheck}
                                        className={style.icon}
                                    />
                                    Quick timelines
                                </li>
                            </ul>
                        </div>
                        <div className={style.cons}>
                            <h3>Typical contractor</h3>
                            <ul>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className={style.icon}
                                    />
                                    No price guarantee
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className={style.icon}
                                    />
                                    Expensive designs
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className={style.icon}
                                    />
                                    Better have cash
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className={style.icon}
                                    />
                                    Permit denial risk
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className={style.icon}
                                    />
                                    Responsible for only parts
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className={style.icon}
                                    />
                                    Solar additional cost
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className={style.icon}
                                    />
                                    Delayed
                                </li>
                                <li>
                                    <FontAwesomeIcon
                                        icon={faTriangleExclamation}
                                        className={style.icon}
                                    />
                                    Disruptive timelines
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
                <Catchall />
            </main>

            <Footer />
        </>
    )
}
