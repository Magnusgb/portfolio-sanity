import { defineType, defineField } from 'sanity'

export const herobanner = defineType({
    name: 'herobanner',
    title: 'Herobanner',
    type: 'document',
    fields: [
        defineField({
        name: 'heading',
        title: 'Title',
        type: 'string',
        }),
        defineField({
        name: 'subheading',
        title: 'Underoverskrift',
        type: 'string',
        }),
        defineField({
        name: 'image',
        title: 'Billede',
        type: 'image',
        }),
        defineField({
        name: 'buttonText',
        title: 'CTA knap',
        type: 'string',
        }),
        defineField({
        name: 'buttonUrl',
        title: 'CTA knap URL',
        type: 'string',
        }),
    ],
})