/* eslint-disable react-hooks/exhaustive-deps */
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import logo from "../assets/logo.png";
import user from "../assets/user.png";
import { IoSearchOutline } from "react-icons/io5";
import { useEffect, useState } from "react";
import { navigation } from "../constants/navigation";

const Header = () => {
  const location = useLocation();
  const removeSpace = location?.search?.slice(3)?.split("%20")?.join(" ");
 
  
  const [userInput, setInput] = useState(removeSpace);

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  useEffect(() => {
    if (userInput) {
      navigate(`search?q=${userInput}`);
    }
  }, [userInput]);

  return (
    <header className=" fixed top-0 w-full h-16 bg-black opacity-75 z-40">
      <div className="container mx-auto px-12 flex items-center h-full">
        <Link to={"/"}>
          <img src={logo} alt="Logo" width={120} />
        </Link>
        <nav className="hidden lg:flex items-center ml-4 gap-4">
          {navigation.map((curr, index) => {
            return (
              <div key={index}>
                <NavLink
                  to={curr.href}
                  className={({ isActive }) =>
                    ` px-2 hover:text-white ${isActive && "text-blue-300"}`
                  }
                >
                  {curr.label}
                </NavLink>
              </div>
            );
          })}
        </nav>
        <div className="ml-auto flex items-center gap-6">
          <form className="flex items-center gap-2" onSubmit={handleSubmit}>
            <input
              type="text"
              placeholder="Search ..."
              className="bg-transparent outline-none border-none px-4 py-1 hidden lg:block"
              value={userInput}
              onChange={(e) => setInput(e.target.value)}
            />
            <button className="text-2xl text-white">
              <IoSearchOutline />
            </button>
          </form>
          <div className="w-10 h-10 rounded-full overflow-hidden cursor-pointer active:scale-50 transition-all">
            <img src={user} alt="user" className="w-full h-full" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
