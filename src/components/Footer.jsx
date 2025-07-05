import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="text-center bg-neutral-600 opacity-35 text-neutral-100 py-2">
      <div className="flex items-center justify-center gap-4">
        <Link>About</Link>

        <Link>Contact</Link>
      </div>
      <p className="text-sm">created by Kaushal</p>
    </footer>
  );
};

export default Footer;
