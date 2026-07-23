import {defineArrayMember, defineField, defineType} from 'sanity'

const groups = [
  {name: 'general', title: 'General'},
  {name: 'nav', title: 'Navegacion'},
  {name: 'hero', title: 'Hero'},
  {name: 'services', title: 'Servicios'},
  {name: 'about', title: 'Nosotros'},
  {name: 'why', title: 'Por que elegirnos'},
  {name: 'process', title: 'Como trabajamos'},
  {name: 'footer', title: 'Footer'},
]

const linkField = defineArrayMember({
  type: 'object',
  fields: [
    defineField({name: 'label', title: 'Texto', type: 'string'}),
    defineField({name: 'href', title: 'Link', type: 'string'}),
  ],
  preview: {
    select: {title: 'label', subtitle: 'href'},
  },
})

const serviceCardField = defineArrayMember({
  type: 'object',
  fields: [
    defineField({name: 'title', title: 'Titulo', type: 'string'}),
    defineField({name: 'href', title: 'Link', type: 'string'}),
    defineField({name: 'image', title: 'Imagen', type: 'editableImage'}),
  ],
  preview: {
    select: {title: 'title', subtitle: 'href'},
  },
})

const textItemField = defineArrayMember({type: 'string'})

export const homeLanding = defineType({
  name: 'homeLanding',
  title: 'Contenido Home',
  type: 'document',
  groups,
  fields: [
    defineField({
      name: 'title',
      title: 'Titulo interno',
      type: 'string',
      hidden: true,
    }),
    defineField({
      name: 'whatsappUrl',
      title: 'URL WhatsApp',
      type: 'url',
      group: 'general',
      validation: (Rule) => Rule.uri({scheme: ['http', 'https']}),
    }),
    defineField({name: 'logo', title: 'Logo', type: 'editableImage', group: 'general'}),
    defineField({
      name: 'nav',
      title: 'Menus',
      type: 'object',
      group: 'nav',
      fields: [
        defineField({name: 'main', title: 'Menu principal', type: 'array', of: [linkField]}),
        defineField({name: 'nosotros', title: 'Menu nosotros', type: 'array', of: [linkField]}),
        defineField({name: 'servicios', title: 'Menu servicios', type: 'array', of: [linkField]}),
      ],
    }),
    defineField({name: 'heroBackground', title: 'Fondo principal', type: 'editableImage', group: 'hero'}),
    defineField({name: 'headline', title: 'Titular principal', type: 'string', group: 'hero'}),
    defineField({
      name: 'serviceCards',
      title: 'Tarjetas de servicios',
      type: 'array',
      group: 'services',
      of: [serviceCardField],
    }),
    defineField({
      name: 'about',
      title: 'Nosotros',
      type: 'object',
      group: 'about',
      fields: [
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({name: 'body', title: 'Parrafos', type: 'array', of: [textItemField]}),
        defineField({name: 'person', title: 'Imagen persona', type: 'editableImage'}),
        defineField({name: 'camera', title: 'Imagen camara', type: 'editableImage'}),
      ],
    }),
    defineField({
      name: 'studio',
      title: 'Banda estudio',
      type: 'object',
      group: 'about',
      fields: [
        defineField({name: 'eyebrow', title: 'Texto superior', type: 'string'}),
        defineField({name: 'highlight', title: 'Texto destacado', type: 'string'}),
        defineField({name: 'suffix', title: 'Texto final', type: 'string'}),
        defineField({name: 'buttonLabel', title: 'Boton', type: 'string'}),
        defineField({name: 'image', title: 'Imagen', type: 'editableImage'}),
      ],
    }),
    defineField({
      name: 'why',
      title: 'Por que elegirnos',
      type: 'object',
      group: 'why',
      fields: [
        defineField({name: 'title', title: 'Titulo', type: 'string'}),
        defineField({name: 'background', title: 'Fondo', type: 'editableImage'}),
        defineField({name: 'check', title: 'Icono check', type: 'editableImage'}),
        defineField({name: 'items', title: 'Puntos', type: 'array', of: [textItemField]}),
      ],
    }),
    defineField({
      name: 'gallery',
      title: 'Galeria',
      type: 'array',
      group: 'why',
      of: [defineArrayMember({type: 'editableImage'})],
    }),
    defineField({
      name: 'process',
      title: 'Como trabajamos',
      type: 'object',
      group: 'process',
      fields: [
        defineField({name: 'titlePrefix', title: 'Titulo linea 1', type: 'string'}),
        defineField({name: 'titleSuffix', title: 'Titulo linea 2', type: 'string'}),
        defineField({name: 'background', title: 'Fondo', type: 'editableImage'}),
        defineField({
          name: 'steps',
          title: 'Pasos',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'title', title: 'Titulo', type: 'string'}),
                defineField({name: 'body', title: 'Texto', type: 'text'}),
                defineField({name: 'icon', title: 'Icono', type: 'editableImage'}),
              ],
              preview: {select: {title: 'title'}},
            }),
          ],
        }),
        defineField({name: 'paymentsTitle', title: 'Titulo formas de pago', type: 'string'}),
        defineField({name: 'paymentNotes', title: 'Notas de pago', type: 'array', of: [textItemField]}),
        defineField({name: 'paymentsIntro', title: 'Intro formas de pago', type: 'string'}),
        defineField({
          name: 'payments',
          title: 'Formas de pago',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Texto', type: 'string'}),
                defineField({name: 'icon', title: 'Icono', type: 'editableImage'}),
              ],
              preview: {select: {title: 'label'}},
            }),
          ],
        }),
      ],
    }),
    defineField({
      name: 'footer',
      title: 'Footer',
      type: 'object',
      group: 'footer',
      fields: [
        defineField({name: 'email', title: 'Email', type: 'string'}),
        defineField({name: 'phone', title: 'Telefono', type: 'string'}),
        defineField({
          name: 'socials',
          title: 'Redes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'label', title: 'Nombre', type: 'string'}),
                defineField({name: 'href', title: 'Link', type: 'string'}),
                defineField({name: 'text', title: 'Icono/texto', type: 'string'}),
              ],
              preview: {select: {title: 'label', subtitle: 'href'}},
            }),
          ],
        }),
        defineField({
          name: 'handles',
          title: 'Usuarios redes',
          type: 'array',
          of: [
            defineArrayMember({
              type: 'object',
              fields: [
                defineField({name: 'icon', title: 'Icono/texto', type: 'string'}),
                defineField({name: 'text', title: 'Usuario', type: 'string'}),
                defineField({name: 'href', title: 'Link', type: 'string'}),
              ],
              preview: {select: {title: 'text', subtitle: 'href'}},
            }),
          ],
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({title: 'Contenido Home'}),
  },
})
