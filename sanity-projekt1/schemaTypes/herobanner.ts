import { defineType, defineField } from 'sanity'

export const herobanner = defineType({
    name: 'herobanner',
    title: 'Herobanner',
    type: 'document',
    fields: [
        defineField({
        name: 'heading',
        title: 'Heading',
        type: 'string',
        }),
        defineField({
        name: 'subheading',
        title: 'Subheading',
        type: 'string',
        }),
        defineField({
        name: 'image',
        title: 'Image',
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