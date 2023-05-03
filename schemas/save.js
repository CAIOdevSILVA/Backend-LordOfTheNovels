import { defineField, defineType } from "sanity"

export default defineType({
  name: "save",
  title: "Salvos",
  type: "document",
  fields:[
    defineField({
      name: "postedBy",
      title: "Salvo por",
      type: "postedBy"
    }),
    defineField({
      name:"name",
      title: "Nome",
      type: "string"
    })
  ]
})