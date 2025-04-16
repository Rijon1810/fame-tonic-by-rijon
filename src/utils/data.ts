interface NavItem {
  label: string;
  href: string;
}

interface OurServices {
  name: string;
}

export const navItems: NavItem[] = [
  { label: "About us", href: "/about-us" },
  { label: "Contact", href: "/contact" },
];

export const ourServices: OurServices[] = [
  { name: "Start growing your influence right away—no waiting required!" },
  {
    name: "Create viral TikToks and Reels step by step with easy-to-follow lessons",
  },
  { name: "Use a Personal AI Worker to boost your content" },
  { name: "Learn from expert-led courses designed for aspiring influencers" },
];
