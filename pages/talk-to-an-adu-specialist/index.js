import { useState, useRef } from 'react'
import Link from 'next/link'
import Layout from '../../src/layouts/LeadForm'
import style from './Form.module.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinnerThird } from '@fortawesome/pro-duotone-svg-icons'

import AddressAutocomplete from '@/components/AddressAutocomplete'

export default function LeadForm({ data }) {
    const [address, setAddress] = useState('Not set yet')

    const formRef = useRef()
    const messageRef = useRef()

    async function createPerson(e) {
        e.preventDefault()

        e.target.fields.disabled = true
        e.target.btn.firstChild.innerText = 'Submitting...'
        e.target.btn.lastChild.style.display = 'block'

        const names = e.target.name.value.split(' ')

        const person = {
            name: e.target.name.value,
            email: [{ value: e.target.email.value }],
            phone: [{ value: e.target.mobile.value }],
        }

        const lead = {
            name: e.target.name.value,
            address: e.target.selectedAddress.value,
            firstname: names[0],
            lastname: names[names.length - 1],
            email: [{ value: e.target.email.value }],
            phone: [{ value: e.target.mobile.value }],
            source: e.target.source.value,
        }

        const res = await fetch(
            `https://${process.env.NEXT_PUBLIC_PIPEDRIVE_DOMAIN}.pipedrive.com/v1/persons?&api_token=${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`,
            {
                method: 'POST',
                body: JSON.stringify(person),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        const data = await res.json()

        createLead(data.data, lead)
    }

    async function createLead(d, lead) {
        let source = null

        switch (lead.source) {
            case 'ADU Event':
                source = 58
                break
            case 'Open House':
                source = 59
                break
            case 'Referral':
                source = 60
                break
            case 'Search':
                source = 61
                break
            case 'Social Media':
                source = 28
                break
            default:
                source = 56
        }

        const submittedLead = {
            title: `${d.first_name} ${d.last_name}`,
            person_id: d.id,
            '2d53fd586f7bec45cffbae211118af378a38a61d': d.first_name,
            '30a2b54f80758dab86a35c127fb7fd2d70ba36c0': d.last_name,
            '80ecccdf8f5ceabad89d411094abbc61248f16c8': d.phone[0].value,
            // prettier-ignore
            "fd49bc4881f7bdffdeaa1868171df24bea5925fe": source,

            '47f338d18c478ccd45a1b19afb8629561a7f714e': lead.address,
            // prettier-ignore
            "bbb72730be7b5833fef926f0ab0636961bdb0050": d.primary_email,
        }

        const res = await fetch(
            `https://${process.env.NEXT_PUBLIC_PIPEDRIVE_DOMAIN}.pipedrive.com/v1/deals?&api_token=${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`,
            {
                method: 'POST',
                body: JSON.stringify(submittedLead),
                headers: {
                    'Content-Type': 'application/json',
                },
            }
        )
        const data = await res.json()

        if (data.success) {
            formRef.current.style.display = 'none'
            messageRef.current.style.display = 'block'
        }
    }

    async function getAllFields(e) {
        e.preventDefault()

        const res = await fetch(
            `https://${process.env.NEXT_PUBLIC_PIPEDRIVE_DOMAIN}.pipedrive.com/v1/dealFields?&api_token=${process.env.NEXT_PUBLIC_PIPEDRIVE_API_TOKEN}`
        )
        const data = await res.json()

        if (!data) {
            console.log('Porblem')
        } else {
            console.log(data)
        }
    }

    return (
        <Layout>
            <div className={style.content}>
                <h1>Talk to an ADU specialist</h1>
                <div ref={formRef}>
                    <form onSubmit={createPerson}>
                        <fieldset id="fields">
                            <AddressAutocomplete setAddress={setAddress} />
                            <input
                                type="hidden"
                                id="selectedAddress"
                                name="selectedAddress"
                                value={address}
                            />
                            <div className={style.field}>
                                <label htmlFor="firstname">Full name</label>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    className={style.textfield}
                                    data-1p-ignore
                                    // defaultValue="Raymond Elder"
                                />
                            </div>
                            <div className={style.field}>
                                <label htmlFor="email">Email address</label>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    className={style.textfield}
                                    data-1p-ignore
                                    // defaultValue="hello@rayelder.com"
                                />
                            </div>
                            <div className={style.field}>
                                <label htmlFor="mobile">Mobile phone</label>
                                <input
                                    type="text"
                                    name="mobile"
                                    id="mobile"
                                    required
                                    className={style.textfield}
                                    // defaultValue="8018503070"
                                />
                            </div>
                            <div className={style.field}>
                                <label>How did you hear about us?</label>
                                <label className={style.option}>
                                    <input
                                        type="radio"
                                        name="source"
                                        value="ADU Event"
                                        required
                                    />
                                    <span className={style.option_label}>
                                        ADU event
                                    </span>
                                </label>
                                <label className={style.option}>
                                    <input
                                        type="radio"
                                        name="source"
                                        value="Open House"
                                    />
                                    <span className={style.option_label}>
                                        Open house
                                    </span>
                                </label>
                                <label className={style.option}>
                                    <input
                                        type="radio"
                                        name="source"
                                        value="Referral (Friend/Real Estate Agent/Lender etc.)"
                                    />
                                    <span className={style.option_label}>
                                        Referral (Friend/Real Estate
                                        Agent/Lender etc.)
                                    </span>
                                </label>
                                <label className={style.option}>
                                    <input
                                        type="radio"
                                        name="source"
                                        value="Search"
                                    />
                                    <span className={style.option_label}>
                                        Search
                                    </span>
                                </label>
                                <label className={style.option}>
                                    <input
                                        type="radio"
                                        name="source"
                                        value="Social Media"
                                    />
                                    <span className={style.option_label}>
                                        Social media
                                    </span>
                                </label>
                            </div>
                        </fieldset>
                        <button id="btn" className={style.inputButton}>
                            <span>Submit</span>
                            <FontAwesomeIcon
                                icon={faSpinnerThird}
                                size="lg"
                                spin
                                style={{
                                    '--fa-primary-color': '#fff',
                                    '--fa-secondary-color': '#fff',
                                    '--fa-secondary-opacity': '0.25',
                                }}
                                className={style.icon}
                            />
                        </button>
                        <p className={style.legal_print}>
                            By clicking &ldquo;Submit,&rdquo; you are granting
                            consent to receive promotional emails and text
                            messages from Backyard Estates. These communications
                            aim to keep you informed about updates, special
                            offers, and pertinent information regarding our ADU
                            construction services. Additionally, your consent
                            indicates that you have read and understood our{' '}
                            <Link href="/legal/privacy-policy">
                                Privacy Policy
                            </Link>
                            . You may choose to unsubscribe from our promotional
                            emails and texts by using the opt-out link provided
                            in our communications. Thank you for considering
                            Backyard Estates for your ADU needs.
                        </p>
                    </form>
                </div>
                <div ref={messageRef} id="success" className={style.success}>
                    <h3>Thank you!</h3>
                    <p>Someone from our team will contact you soon.</p>
                </div>
            </div>
        </Layout>
    )
}
