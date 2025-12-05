import { projects } from "../data/projects";

export const Projects = () => {
  return (
    <div className="space-y-6 max-h-[70vh] overflow-y-auto px-1">
      <h1 className="text-slate-100 uppercase font-medium tracking-widest">
        Projects I've Worked On
      </h1>
      {projects.map((proj) => (
        <div
          key={proj.title}
          className="p-5 rounded-lg border border-white/10 bg-white/2 hover:bg-white/5 transition-all"
        >
          <h2 className="text-lg font-medium text-gray-100 mb-2">
            {proj.title}
          </h2>
          <p className="text-sm text-gray-400 mb-4 leading-relaxed">
            {proj.description}
          </p>

          <div className="flex flex-wrap gap-2 mb-4">
            {proj.stack.map((tech) => (
              <span
                key={tech}
                className="text-xs px-2 py-1 rounded bg-white/5 border border-white/10 text-gray-300"
              >
                {tech}
              </span>
            ))}
          </div>

          <div className="flex gap-3 text-sm">
            <a
              href={proj.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-yellow-500
            hover:text-yellow-400 transition-colors flex items-center gap-1"
            >
              {proj.link ? "Visit Project →" : "No Link Available"}
            </a>

            <a
              href={proj.repo}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400
            hover:text-gray-300 transition-colors flex items-center gap-1"
            >
              {proj.repo ? "View Repo → " : "No Repo Available"}
            </a>
          </div>
        </div>
      ))}
    </div>
  );
};
