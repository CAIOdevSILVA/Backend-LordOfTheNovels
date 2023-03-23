import { defineType, defineField } from "sanity"

export default defineType({
  name:"banners",
  title: "Banners",
  type: "document",
  fields:[
    defineField({
      name: "banner",
      title: "Banner",
      type: "image",
      options: {
        hotspot: true
      }
    }),
    defineField({
      name: "destination",
      title: "Link de destino",
      type: "string"
    })
  ]
})