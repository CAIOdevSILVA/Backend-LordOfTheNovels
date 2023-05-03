import { defineType, defineField } from "sanity"


export default defineType({
  name:"siteConfig",
  title:"Configuração do site",
  type: "document",
  fields: [
    defineField({
      name: "config",
      title:"Nome do site",
      type: "string"
    }),
    defineField({
      name: "termosDeUso",
      title:"Termos de Uso",
      type: "blockContent"
    }),
    defineField({
      name: "PoliticaDePrivacidade",
      title: "Política de Privacidade",
      type: "blockContent"
    }),
    defineField({
      name:"facebook",
      title: "Conta no Facebook(Opcional)",
      type: "string"
    }),
    defineField({
      name:"instagram",
      title: "Conta no Instagram(Opcional)",
      type: "string"
    }),
    defineField({
      name:"tiktok",
      title: "Conta no TikTok(Opcional)",
      type: "string"
    }),
    defineField({
      name:"discord",
      title: "Conta no Discord(Opcional)",
      type: "string"
    })
  ]
})