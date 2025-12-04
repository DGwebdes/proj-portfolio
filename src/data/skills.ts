type skillList = {
  category: string;
  items: { url: string; language: string }[];
}[];

export const skills: skillList = [
  {
    category: "Frontend",
    items: [
      { url: `/public/svg/ts.svg`, language: `Typescript` },
      { url: `/public/svg/re.svg`, language: `React` },
      { url: `/public/svg/ne.svg`, language: `Nextjs` },
      { url: `/public/svg/tw.svg`, language: `Tailwind` },
    ],
  },
  {
    category: "Backend",
    items: [
      { url: `/public/svg/node.svg`, language: `Node` },
      { url: `/public/svg/ex.svg`, language: `Express` },
      { url: `/public/svg/nest.svg`, language: `Nest` },
      { url: `/public/svg/php.svg`, language: `PHP` },
    ],
  },
  {
    category: "Database / DevOps",
    items: [
      { url: `/public/svg/mdb.svg`, language: `Mongodb` },
      { url: `/public/svg/pg.svg`, language: `Postgres` },
      { url: `/public/svg/git.svg`, language: `Git` },
      { url: `/public/svg/cp.svg`, language: `cPanel` },
      { url: `/public/svg/docker.svg`, language: `Docker` },
    ],
  },
];
