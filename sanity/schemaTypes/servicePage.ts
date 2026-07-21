import {defineArrayMember, defineField, defineType} from 'sanity'

const imageField = defineField({name: 'image', title: 'Imagen', type: 'editableImage'})

export const servicePage = defineType({
  name: 'servicePage',
  title: 'Servicio',
  type: 'document',
  fields: [
    defineField({name: 'title', title: 'Nombre del servicio', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'slug', title: 'Ruta', type: 'string', validation: (Rule) => Rule.required()}),
    defineField({name: 'seoDescription', title: 'Descripción SEO', type: 'text', rows: 3}),
    defineField({name: 'hero', title: 'Imagen principal', type: 'editableImage'}),
    defineField({name: 'photoLabel', title: 'Etiqueta fotos', type: 'string', initialValue: 'Fotos'}),
    defineField({name: 'videoLabel', title: 'Etiqueta videos', type: 'string', initialValue: 'Videos'}),
    defineField({name: 'gallery', title: 'Galería de fotos', type: 'array', of: [defineArrayMember({type: 'editableImage'})]}),
    defineField({
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          fields: [
            defineField({name: 'title', title: 'Título', type: 'string'}),
            defineField({name: 'youtubeId', title: 'ID YouTube', type: 'string'}),
            imageField,
          ],
          preview: {select: {title: 'title', subtitle: 'youtubeId'}},
        }),
      ],
    }),
    defineField({
      name: 'packages',
      title: 'Paquetes',
      type: 'object',
      fields: [
        defineField({name: 'eyebrow', title: 'Texto superior', type: 'string'}),
        defineField({name: 'title', title: 'Título', type: 'string'}),
        defineField({name: 'ctaLabel', title: 'Texto botón', type: 'string', initialValue: 'Agenda ahora'}),
        defineField({
          name: 'plans',
          title: 'Planes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'name', title: 'Nombre', type: 'string'}),
                defineField({name: 'price', title: 'Precio', type: 'string'}),
                defineField({name: 'featured', title: 'Destacado', type: 'boolean', initialValue: false}),
                defineField({name: 'bullets', title: 'Incluye', type: 'array', of: [defineArrayMember({type: 'string'})]}),
              ],
              preview: {select: {title: 'name', subtitle: 'price'}},
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    select: {title: 'title', subtitle: 'slug'},
  },
})
