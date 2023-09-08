import type { SiteConfig } from "@/lib/types";
const siteConfig: SiteConfig = {
  avatar: "/avatar.png",
  siteUrl: "https://itsdavid.vercel.app",
  siteName: "David Clinton",
  siteDescription:
    "Starter template for a personal website blog, built with Next.js, MDX, and Tailwind CSS.",
  siteThumbnail: "/og-image.png",
  nav: [
    { label: "Posts", href: "/posts" },
    { label: "About", href: "/about" },
  ],
  social: {
    github: "https://github.com/daveclinton",
    twitter: "https://twitter.com/daveclintonn",
    linkedin: "https://www.linkedin.com/in/clintondavid46/",
  },
};
export default siteConfig;
