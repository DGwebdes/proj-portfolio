type SkillCardProps = {
  url: string;
  language: string;
};

export const SkillCard = ({ url, language }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center p-1 lg:p-4 m-2 gap-1">
      <img src={url} alt="ts" className="w-8 md:w-12 rounded" />
      <p>{language}</p>
    </div>
  );
};
