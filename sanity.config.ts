import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './sanity/schemaTypes'
import {structure} from './sanity/deskStructure'

const projectId = 'hg6wp5ra'
const dataset = 'production'

export default defineConfig({
  name: 'klipstudio',
  title: 'KlipStudio CMS',
  projectId,
  dataset,
  plugins: [structureTool({structure}), visionTool()],
  schema: {
    types: schemaTypes,
    templates: [],
  },
  document: {
    actions: (previousActions, context) => {
      if (context.schemaType !== 'homeLanding') return previousActions
      return previousActions.filter((action) => action.action !== 'delete' && action.action !== 'duplicate')
    },
  },
})
