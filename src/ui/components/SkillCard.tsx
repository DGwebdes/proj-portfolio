type SkillCardProps = {
  url: string;
  language: string;
};

export const SkillCard = ({ url, language }: SkillCardProps) => {
  return (
    <div className="flex flex-col items-center gap-2 p-3 rounded-lg border border-white/5 bg-white/2 hover:bg-white/5 hover:border-white/10 transition-all duration-200 min-w-20">
      <img src={url} alt={language} className="w-10 h-10 object-contain" />
      <p className="text-xs text-gray-300">{language}</p>
    </div>
  );
};