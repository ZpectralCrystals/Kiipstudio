import type {StructureResolver} from 'sanity/structure'

export const structure: StructureResolver = (S) =>
  S.list()
    .title('Contenido')
    .items([
      S.listItem()
        .id('homeLanding')
        .schemaType('homeLanding')
        .title('Contenido Home')
        .child(
          S.editor()
            .id('homeLanding')
            .title('Contenido Home')
            .schemaType('homeLanding')
            .documentId('homeLanding'),
        ),
    ])
