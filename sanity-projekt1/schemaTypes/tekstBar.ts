import { defineType, defineField } from 'sanity'

export const tekstBar = defineType({
  name: 'announcementBar',
  title: 'Annoceringsbar-top',
  type: 'document',
  fields: [
    defineField({
      name: 'text1',
      title: 'Første besked',
      type: 'string',
    }),
    defineField({
      name: 'text2',
      title: 'Anden besked',
      type: 'string',
    }),
    defineField({
      name: 'interval',
      title: 'Sekunder mellem beskeder',
      type: 'number',
      description: 'Hvor mange sekunder skal der gå mellem beskederne',
      validation: (Rule) => Rule.min(2).max(10),
    }),
    defineField({
      name: 'isActive',
      title: 'Show Announcement',
      type: 'boolean',
      initialValue: true,
    }),
  ],
})
