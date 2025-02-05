import { defineType, defineField } from "sanity";

export const navigation = defineType({
  name: "navigation",
  title: "Navigation",
  type: "document",
  fields: [
    // Skjult Title felt
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    
    // Logo felt med obligatorisk upload
    defineField({
      name: "logo",
      title: "Logo",
      type: "image",
      validation: (Rule) => Rule.required().error('Logo skal uploades!'),
    }),

    // Alt tekst til logoet
    defineField({
      name: "altText",
      title: "Alt-tekst for Logo",
      type: "string",
      description: "Angiv en alternativ tekst til logoet for tilgængelighed.",
      validation: (Rule) => Rule.required().min(1).max(200), // Validering for at sikre, at der er tekst
    }),

    // Navigation Links (array)
    defineField({
      name: "links",
      title: "Navigation Links",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            defineField({
              name: "title",
              title: "Menupunkt",
              type: "string",
              validation: (Rule) => Rule.required().min(2).max(20),
            }),
            defineField({
              name: "url",
              title: "Link URL",
              type: "url", 
              validation: (Rule) =>
                Rule.required().uri({
                  allowRelative: true, 
                  scheme: ["http", "https"],
                }),
            }),
          ],
        },
      ],
      validation: (Rule) => Rule.min(1).max(5), 
    }),
  ],
});
