import { createClient } from 'next-sanity'

export const client = createClient({
    projectId: '4sw2w31c',
    dataset: 'production',
    apiVersion: '2025-05-30',
    useCdn: false,
})
