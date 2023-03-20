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
    defineField({
      name: "image",
      title: "Imagem",
      type: 'image',
      options:{
        hotspot: true
      }
    }),
    defineField({
      name: "email",
      title: "Email",
      type: "string",
    }),
    defineField({
      name:"theme",
      title: "Tema",
      type: "string"
    }),
    defineField({
      name: "token",
      title: "Token",
      type: "string"
    })
  ]
})