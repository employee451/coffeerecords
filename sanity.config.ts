import { defineConfig } from "sanity"
import { deskTool } from 'sanity/desk'
import { types } from './schemas'
import {SANITY_DATASET, SANITY_PROJECT_ID} from '@/constants'

console.log(process.env.SANITY_PROJECT_ID)

export const config = defineConfig({
    basePath: '/studio',
    projectId: SANITY_PROJECT_ID,
    dataset: SANITY_DATASET,
    plugins: [deskTool()],
    schema: { types }
})
