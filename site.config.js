const CONFIG = {
  // profile setting (required)
  profile: {
    name: "OpenBMB",
    image: "/OpenBMB_alpha.png", // If you want to create your own notion avatar, check out https://notion-avatar.vercel.app
    role: "Open Lab for Big Model Base",
    bio: "OpenBMB aims to build foundation models and systems towards AGI.",
    email: "openbmb@gmail.com",
    linkedin: "",
    github: "OpenBMB",
    instagram: "",
  },
  projects: [
    {
      name: `MiniCPM`,
      href: "https://github.com/OpenBMB/MiniCPM",
    },
    {
      name: `MiniCPM-V/o`,
      href: "https://github.com/OpenBMB/MiniCPM-V",
    },
  ],
  // blog setting (required)
  blog: {
    title: "OpenBMB Blog",
    description: "Welcome to OpenBMB blog!",
  },

  // CONFIG configration (required)
  link: "https://openbmb.vercel.app",
  since: 2024, // If leave this empty, current year will be used.
  lang: "en-US", // ['en-US', 'zh-CN', 'zh-HK', 'zh-TW', 'ja-JP', 'es-ES', 'ko-KR']
  ogImageGenerateURL: "https://og-image-korean.vercel.app", // The link to generate OG image, don't end with a slash

  // notion configuration (required)
  notionConfig: {
    pageId: process.env.NOTION_PAGE_ID,
  },

  // plugin configuration (optional)
  googleAnalytics: {
    enable: false,
    config: {
      measurementId: process.env.NEXT_PUBLIC_GOOGLE_MEASUREMENT_ID || "",
    },
  },
  googleSearchConsole: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION || "",
    },
  },
  naverSearchAdvisor: {
    enable: false,
    config: {
      siteVerification: process.env.NEXT_PUBLIC_NAVER_SITE_VERIFICATION || "",
    },
  },
  utterances: {
    enable: false,
    config: {
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO || "",
      "issue-term": "og:title",
      label: "💬 Utterances",
    },
  },
  cusdis: {
    enable: false,
    config: {
      host: "https://cusdis.com",
      appid: "", // Embed Code -> data-app-id value
    },
  },
  isProd: process.env.VERCEL_ENV === "production", // distinguish between development and production environment (ref: https://vercel.com/docs/environment-variables#system-environment-variables)
  revalidateTime: 21600 * 7, // revalidate time for [slug], index
}

module.exports = { CONFIG }
