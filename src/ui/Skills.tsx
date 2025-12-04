import { SkillCard } from "./components/SkillCard";

export const Skills = () => {
  return (
    <div className="text-center">
      <h2 className="text-2xl font-bold mb-5">Toolbox</h2>
      <div className="">
        <h3>Frontend:</h3>
        <div className="flex flex-wrap justify-center gap-2 border-b-2 border-dashed border-b-amber-200">
          <SkillCard url={`/public/svg/ts.svg`} language={`Typescript`} />
          <SkillCard url={`/public/svg/re.svg`} language={`React`} />
          <SkillCard url={`/public/svg/ne.svg`} language={`Nextjs`} />
          <SkillCard url={`/public/svg/tw.svg`} language={`Tailwind`} />
        </div>
      </div>
      <div className="mt-5">
        <h3>Backend:</h3>
        <div className="flex flex-wrap justify-center gap-2 border-b-2 border-dashed border-b-amber-200">
          <SkillCard url={`/public/svg/node.svg`} language={`Node`} />
          <SkillCard url={`/public/svg/ex.svg`} language={`Express`} />
          <SkillCard url={`/public/svg/nest.svg`} language={`Nest`} />
          <SkillCard url={`/public/svg/php.svg`} language={`PHP`} />
        </div>
      </div>
      <div className="mt-5">
        <h3>Database / DevOps:</h3>
        <div className="flex flex-wrap justify-center gap-2 ">
          <SkillCard url={`/public/svg/mdb.svg`} language={`Mongodb`} />
          <SkillCard url={`/public/svg/pg.svg`} language={`Postgres`} />
          <SkillCard url={`/public/svg/git.svg`} language={`Git`} />
          <SkillCard url={`/public/svg/cp.svg`} language={`cPanel`} />
          <SkillCard url={`/public/svg/docker.svg`} language={`Docker`} />
        </div>
      </div>
    </div>
  );
};
