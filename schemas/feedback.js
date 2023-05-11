import { defineField, defineType } from "sanity"

export default defineType({
  name: "feedback",
  title: "Feedback",
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
    ,
    defineField({
      name: "stars",
      title: "Nota",
      type: "number"
    })
  ]
})