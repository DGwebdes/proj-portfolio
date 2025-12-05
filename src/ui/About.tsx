type AboutProps = {
  handleToggle: () => void;
  toggleState?: boolean;
};

export const About = ({ handleToggle, toggleState }: AboutProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2 md:gap-4">
      <img src="/eu.webp" className="w-75 rounded-2xl drop-shadow-blue-50" />
      <h1 className="text-3xl font-extrabold">
        Hi!🤙I'm{" "}
        <span className="text-yellow-500 tracking-wide">Dielan Garve</span>
      </h1>
      <p className="text-gray-400 text-medium">
        Fullstack Developer based in: Faro - Portugal
      </p>

      <button
        onClick={handleToggle}
        className="bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/50 text-yellow-400 px-6 py-3 rounded-full shadow-lg hover:bg-yellow-500/30 hover:border-yellow-500 transition-all z-50 font-medium shadow-stone-950 mt-5"
      >
        {toggleState ? "See Projects" : "See Toolbox"}
      </button>
    </div>
  );
};
