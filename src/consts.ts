// This is your config file, place any global data here.
// You can import this data from anywhere in your site by using the `import` keyword.

type Config = {
  title: string;
  description: string;
  lang: string;
  profile: {
    author: string;
    description?: string;
  }
}

type SocialLink = {
  icon: string;
  friendlyName: string; // for accessibility
  link: string;
}

export const siteConfig: Config = {
  title: "jargyle.",
  description: "",
  lang: "en-US",
  profile: {
    author: "John Ragozzine",
    description: "I like words & I like birds"
  }
}

/** 
  These are you social media links. 
  It uses https://github.com/natemoo-re/astro-icon#readme
  You can find icons @ https://icones.js.org/
*/
export const socialLinks: Array<SocialLink> = [
  {
    icon: "mdi:github",
    friendlyName: "Github",
    link: "https://github.com/ragozzine",
  },
  {
    icon: "mdi:linkedin",
    friendlyName: "LinkedIn",
    link: "https://linkedin.com/in/johnragozzine",
  },
  // {
  //  icon: "mdi:email",
  //  friendlyName: "email",
  //  link: "mailto:ndangamy@gmail.com",
  // },
  {
    icon: "mdi:rss",
    friendlyName: "rss",
    link: "/rss.xml"
  }
];

export const NAV_LINKS: Array<{ title: string, path: string }> = [
  {
    title: "Home",
    path: "/",
  },
  {
    title: "About",
    path: "/about",
  },
  {
    title: "Blog",
    path: "/blog",
  },
  // {
  //  title: "Projects",
  //  path: '/projects'
  // },
  {
    title: "Archive",
    path: '/archive'
  }
];
