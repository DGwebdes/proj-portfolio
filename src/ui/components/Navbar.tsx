const Navbar = (): React.JSX.Element => {
  return (
    <nav className="flex items-center justify-between p-2 mb-10 text-white rounded-md shadow-md backdrop-blur-md">
      <h1 className="font-bold uppercase tracking-wider text-gray-100">
        Dielan Garve
      </h1>

      <div className="flex gap-3 justify-center items-center">
        <a
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
          href="https://github.com/DGwebdes"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/svg/gh.svg"
            alt="github-icon"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        </a>

        <a
          href="https://www.linkedin.com/in/dielangarve/"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        >
          <img
            src="/svg/lk.svg"
            alt="linkedin-icon"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        </a>

        <a
          href="https://blog.dielanwebdev.pt"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        >
          <img
            src="/svg/blog.svg"
            alt="blog-icon"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        </a>

        <a
          href="https://x.com/0xDielanGarve"
          target="_blank"
          rel="noopener noreferrer"
          className="p-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 hover:bg-white/20 transition-all"
        >
          <img
            src="/x-black.png"
            alt="x-icon"
            className="w-3 h-3 md:w-4 md:h-4"
          />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
