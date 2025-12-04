const Navbar = (): React.JSX.Element => {
  return (
    <nav className="flex items-center justify-between p-2 mb-10 text-white rounded-md shadow-md backdrop-blur-md">
      <h1 className="font-bold uppercase tracking-wider">Dielan Garve</h1>
      <div className="flex gap-4 justify-center items-center">
        {/* <span className="text-sm">About Me</span> */}
        <span className="text-sm">Projects</span>
      </div>
      <div className="flex gap-4 justify-center items-center">
        <a
          className="cursor-pointer"
          href="https://github.com/DGwebdes"
          target="_blank"
        >
          <img src="/svg/gh.svg" alt="github-icon" className="w-5" />
        </a>
        <a
          href="https://www.linkedin.com/in/dielangarve/"
          target="_blank"
          className="cursor-pointer"
        >
          <img src="/svg/lk.svg" alt="linkedin-icon" className="w-8" />
        </a>
        <a
          href="https://blog.dielanwebdev.pt"
          target="_blank"
          className="cursor-pointer"
        >
          <img src="/svg/blog.svg" alt="blog-icon" className="w-5" />
        </a>
        <a
          href="https://x.com/0xDielanGarve"
          target="_blank"
          className="cursor-pointer"
        >
          <img src="/x-black.png" alt="x-icon" className="w-5" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
