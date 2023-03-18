import { defineField, defineType } from "sanity"

export default defineType({
  name: "novels",
  title: "Novels",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string"
    }),
    defineField({
      name: "author",
      title: "Autor",
      type: "string"
    }),
    defineField({
      name: "about",
      title: "Sinopse",
      type: "string"
    }),
    defineField({
      name: "image",
      title: "Foto de Capa",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "chapters",
      title: "Capítulos",
      type: "array",
      of: [{ type:"chapters" }]
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type:"string" }]
    }),
    defineField({
      name: "save",
      title: "Seguidores",
      type: "array",
      of:[{ type:"save" }]
    }),
    defineField({
      name: "comments",
      title: "Comentários",
      type: "array",
      of: [{ type:"comments" }]
    }),
    defineField({
      name: "stars",
      title: "Nota",
      type: "array",
      of: [{ type:"number" }]
    })
  ]
})