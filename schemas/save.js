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
      name:"userId",
      title: "UserId",
      type: "string"
    })
  ]
})