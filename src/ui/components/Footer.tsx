const today = new Date();

const Footer = (): React.JSX.Element => {
  return (
    <footer className="flex items-center justify-between p-2 mt-10">
      <h1 className="text-sm text-gray-400">{today.toDateString()}</h1>
      <div className="flex gap-4">
        <small className="text-gray-400">All Rights Reserved © 2025</small>
      </div>
    </footer>
  );
};

export default Footer;
