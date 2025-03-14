export type SiteConfig = typeof siteConfig

export const siteConfig = {
  name: "Easy UI",
  description:
    "Beautifully designed website templates built with React and Tailwind CSS.",
  mainNav: [
    {
      title: "Components",
      href: "/component",
    },
    {
      title: "Pricing",
      href: "/easy-mvp-pricing",
    },
    {
      title: "Blog",
      href: "/blog",
    },
    {
      title: "Templates",
      href: "/templates",
    }
  ],
  links: {
    twitter: "https://twitter.com/kathanmehtaa",
    github: "https://github.com/DarkInventor/easy-ui",
    docs: "https://www.easyui.pro/introduction",
  },
}
