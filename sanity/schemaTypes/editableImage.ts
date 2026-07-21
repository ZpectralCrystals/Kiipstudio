import {defineField, defineType} from 'sanity'

export const editableImage = defineType({
  name: 'editableImage',
  title: 'Imagen',
  type: 'object',
  fields: [
    defineField({
      name: 'imageUrl',
      title: 'URL de imagen',
      type: 'url',
      description: 'Pega una URL publica https://.',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({
      name: 'alt',
      title: 'Texto alternativo',
      type: 'string',
    }),
  ],
})
