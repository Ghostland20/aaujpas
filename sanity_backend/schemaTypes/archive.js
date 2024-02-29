import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'journal',
    title: 'Journals',
    type: 'document',
    fields: [
    defineField({
    name: 'manuscript',
    title: 'Manuscript',
    type: 'file',
    fields: [
        defineField({
            name: 'year',
            title: 'Year',
            type: 'string',
          }),
        defineField({
            name: 'volume',
            title: 'Volume',
            type: 'string',
          }),
        defineField({
            name: 'number',
            title: 'Number',
            type: 'string',
          }),
        defineField({
            name: 'author',
            title: 'Author Name',
            type: 'string',
          }),
        defineField({
            name: 'description',
            title: 'Description',
            type: 'string',
          }),
    ]

      })
  ]});