import { NavLink } from "react-router-dom";
import { MobileNavigation } from "../constants/navigation";

const MobileNav = () => {
  return (
    <section className="lg:hidden h-16 bg-neutral-900 opacity-90 backdrop-blur-2xl fixed bottom-0 w-full z-40">
      <div className="flex items-center justify-between h-full text-neutral-400">
        {MobileNavigation.map((current) => {
          return (
            <NavLink
              key={current.label}
              to={current.href}
              className={({ isActive }) =>
                `px-3 flex h-full items-center flex-col justify-center ${
                  isActive && `text-blue-500`
                }`
              }
            >
              <div className="text-2xl">{current.icon}</div>
              <p className="text-sm">{current.label}</p>
            </NavLink>
          );
        })}
      </div>
    </section>
  );
};

export default MobileNav;
