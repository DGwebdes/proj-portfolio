type skillList = {
  category: string;
  items: { url: string; language: string }[];
}[];

export const skills: skillList = [
  {
    category: "Frontend",
    items: [
      { url: `/svg/ts.svg`, language: `Typescript` },
      { url: `/svg/re.svg`, language: `React` },
      { url: `/svg/ne.svg`, language: `Nextjs` },
      { url: `/svg/tw.svg`, language: `Tailwind` },
    ],
  },
  {
    category: "Backend",
    items: [
      { url: `/svg/node.svg`, language: `Node` },
      { url: `/svg/ex.svg`, language: `Express` },
      { url: `/svg/nest.svg`, language: `Nest` },
      { url: `/svg/php.svg`, language: `PHP` },
    ],
  },
  {
    category: "Database / DevOps",
    items: [
      { url: `/svg/mdb.svg`, language: `Mongodb` },
      { url: `/svg/pg.svg`, language: `Postgres` },
      { url: `/svg/git.svg`, language: `Git` },
      { url: `/svg/cp.svg`, language: `cPanel` },
      { url: `/svg/docker.svg`, language: `Docker` },
    ],
  },
];
