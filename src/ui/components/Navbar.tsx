const Navbar = (): React.JSX.Element => {
  return (
    <nav className="flex items-center justify-between p-2 mb-10">
      <h1>Dielan Garve</h1>
      <div className="flex gap-4">
        <a
          className="cursor-pointer"
          href="https://github.com/DGwebdes"
          target="_blank"
        >
          <img src="/svg/gh.svg" alt="github-icon" className="w-6" />
        </a>
        <a
          href="https://www.linkedin.com/in/dielangarve/"
          target="_blank"
          className="cursor-pointer"
        >
          <img src="/svg/li.svg" alt="linkedin-icon" className="w-6" />
        </a>
        <a
          href="https://blog.dielanwebdev.pt"
          target="_blank"
          className="cursor-pointer"
        >
          <img src="/svg/blog.svg" alt="blog-icon" className="w-6" />
        </a>
        <a
          href="https://x.com/0xDielanGarve"
          target="_blank"
          className="cursor-pointer"
        >
          <img src="/public/x-black.png" alt="x-icon" className="w-6" />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
