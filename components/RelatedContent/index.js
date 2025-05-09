import Card from '../Card'
import SectionTitle from '../SectionTitle'
import StandaloneLink from '../StandaloneLink'

import style from './RelatedContent.module.css'

export default function RelatedContent({ properties }) {
    return (
        <div className={style.base}>
            <SectionTitle
                title="Explore properties we&rsquo;ve built"
                explanation=""
            />
            <div className={style.properties}>
                {properties.map((property, index) => (
                    <Card key={index} content={property} />
                ))}
            </div>
            <div className={style.centered}>
                <StandaloneLink href="/properties">View all</StandaloneLink>
            </div>
        </div>
    )
}
