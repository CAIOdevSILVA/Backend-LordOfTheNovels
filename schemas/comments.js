import { defineField, defineType } from "sanity"

export default defineType({
  name: "comments",
  title: "Comentários",
  type: "document",
  fields: [
    defineField({
      name: 'postedBy',
      title: 'PostedBy',
      type: 'postedBy'
    }),
    defineField({
      name: 'comment',
      title: 'Comentário',
      type: 'string'
    })
  ]
})