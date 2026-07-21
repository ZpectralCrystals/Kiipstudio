import './sanity/loadEnv.js'
import {defineCliConfig} from 'sanity/cli'

const projectId =
  process.env.SANITY_STUDIO_PROJECT_ID || process.env.PUBLIC_SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || 'demo'
const dataset =
  process.env.SANITY_STUDIO_DATASET || process.env.PUBLIC_SANITY_DATASET || process.env.SANITY_DATASET || 'production'

export default defineCliConfig({
  api: {
    projectId,
    dataset,
  },
  deployment: {
    appId: 'exblkt7hhrd6f6o3bjw6efdq',
  },
})
