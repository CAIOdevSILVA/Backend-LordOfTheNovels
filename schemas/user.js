import { defineType, defineField } from "sanity"

export default defineType({
  name: "user",
  title: "User",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string"
    }),
    defineField({
      name: "imageUrl",
      title: "Url da Imagem",
      type: "string"
    }),
  ]
})