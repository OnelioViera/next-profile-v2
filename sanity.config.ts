import { defineConfig } from 'sanity'
import { deskTool } from 'sanity/desk'

const config = defineConfig ({
  projectId: '4fvu8wtf',
  dataset: 'production',
  title: 'My Personal Website',
  apiVersion: '2023-09-22',
  basePath: '/admin',
  plugins: [deskTool()]
})

export default config