import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'
import schemas from './sanity/schemas'

const config = defineConfig ({
  projectId: '4fvu8wtf',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2021-06-01',
  basePath: '/admin',
  plugins: [deskTool()],
  schema: { types: schemas },
})

export default config