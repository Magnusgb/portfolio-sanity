import { defineType, defineField } from 'sanity'

export const tekstBar = defineType({
  name: 'announcementBar',
  title: 'Annoceringsbar-top',
  type: 'document',
  fields: [
    defineField({
      name: 'text1',
      title: 'First Announcement Message',
      type: 'string',
    }),
    defineField({
      name: 'text2',
      title: 'Second Announcement Message',
      type: 'string',
    }),
    defineField({
      name: 'interval',
      title: 'Text Swap Interval (Seconds)',
      type: 'number',
      description: 'Choose how often the texts should switch (between 2-10 seconds).',
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
