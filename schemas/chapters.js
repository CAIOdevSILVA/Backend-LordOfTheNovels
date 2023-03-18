import { defineField, defineType } from "sanity"

export default defineType({
  name: "chapters",
  title: "Capítulos",
  type: "document",
  fields: [
    defineField({
      name: 'title',
      title: 'Título',
      type: 'string'
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options:{
        source: "title",
        slugify: input => input
                            .toLowerCase()
                            .replace(/\s+/g, '-')
                            .slice(0, 200)    
      }
    }),
    defineField({
      name: 'body',
      title: 'Body',
      type: 'blockContent',
    }),
    defineField({
      name: 'publishedAt',
      title: 'Data de Publicação',
      type: 'datetime',
    }),
    defineField({
      name: "comments",
      title: "Comentários",
      type: "array",
      of: [{ type:"comments" }]
    })
  ]
})