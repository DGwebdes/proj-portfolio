type AboutProps = {
  handleToggle: () => void;
  toggleState?: boolean;
};

export const About = ({ handleToggle, toggleState }: AboutProps) => {
  return (
    <div className="flex flex-col items-center justify-center gap-2">
      <img src="../../public/face.jpg" className="w-75" />
      <h1 className="text-3xl font-extrabold">
        Hi!🤙I'm{" "}
        <span className="text-yellow-500 tracking-wide">Dielan Garve</span>
      </h1>
      <p>Fullstack Developer based in: Faro - Portugal</p>

      <button
        onClick={handleToggle}
        className=" bg-yellow-500 text-black px-4 py-2 rounded hover:bg-yellow-600"
      >
        {toggleState ? "Contact Me" : "See My Skills"}
      </button>
    </div>
  );
};
