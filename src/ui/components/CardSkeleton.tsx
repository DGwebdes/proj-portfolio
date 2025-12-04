import { SkillCard } from "./SkillCard";
import { skills } from "../../data/skills";

export const CardSkeleton = () => {
  return (
    <div className="mt-5 space-y-8">
      {skills.map((skill) => (
        <div key={skill.category}>
          <h3 className="text-sm uppercase tracking-wider text-gray-400 mb-4 font-medium">
            {skill.category}
          </h3>
          <div className="flex flex-wrap gap-3 items-center justify-center">
            {skill.items.map((item) => (
              <SkillCard
                key={item.language}
                url={item.url}
                language={item.language}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};
