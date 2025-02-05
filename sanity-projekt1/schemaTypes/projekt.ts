import { defineType, defineField } from 'sanity';

export const projekt = defineType({
  name: 'projekter',
  title: 'Projekter',
  type: 'document',
  fields: [
    defineField({
      name: 'heading',
      title: 'Overskrift',
      type: 'string',
    }),
    defineField({
      name: 'subheading',
      title: 'Underoverskrift',
      type: 'string',
    }),
    defineField({
        name: 'images',  
        title: 'Billeder',
        type: 'array',
        of: [
          {
            type: 'image',
            title: 'Billede',  
            options: {
              hotspot: true,  
            },
          },
        ],
      }),
    defineField({
      name: 'details',
      type: 'array',
      of: [{ type: 'block' }],  
    }),
  ],
});
