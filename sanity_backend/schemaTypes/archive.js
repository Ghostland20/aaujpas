import {defineField, defineType} from 'sanity'

export default defineType({
    name: 'journal',
    title: 'Journals',
    type: 'document',
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
        name: 'desc',
        title: 'Description',
        type: 'string',
      }),
      defineField({
        name: 'file',
        title: 'File',
        type: 'file',
      }),
      defineField({
        name: 'title',
        title: 'Document Title',
        type: 'string',
      }),

  ]});