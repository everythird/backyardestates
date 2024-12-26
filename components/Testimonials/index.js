// add sanity support
import { defineQuery } from 'next-sanity'
import { sanityFetch } from '@/sanity/live'

const EVENTS_QUERY = defineQuery(`*[
  _type == "event"
  && defined(slug.current)
]{_id, name, slug, date}|order(date desc)`)

// import { client } from '@/sanity/client'

// property, featured, names, slug, purpose, quote, wistiaId, body, relatedProperties, publishedAt

const STORIES_QUERY = `*[_type == "story" && featured]|order(publishedAt asc){names,portrait,property->{location,floorplan->{name}},slug,quote}`
// const options = { next: { revalidate: 30 } }

// const stories = await client.fetch(STORIES_QUERY, {}, options)

import Testimonial from '../Testimonial'
import style from './Testimonials.module.css'

export default async function Testimonials() {
    const { data: stories } = await sanityFetch({ query: STORIES_QUERY })

    return (
        <div className={style.base}>
            <h2>Trusted by Californian homeowners</h2>
            <p className="small-caps">greater los angeles area</p>
            <div className={style.carousel}>
                {stories.map((story, index) => (
                    <Testimonial story={story} key={index}></Testimonial>
                ))}
            </div>
        </div>
    )
}
