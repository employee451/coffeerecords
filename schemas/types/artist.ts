import { SchemaTypeDefinition } from "sanity";

export const artist: SchemaTypeDefinition = {
    title: 'Artist',
    name: 'artist',
    type: 'document',
    fields: [
        {
            title: 'Name',
            name: 'name',
            type: 'string',
        }
    ]
}
