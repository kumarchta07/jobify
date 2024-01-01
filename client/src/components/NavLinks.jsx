import { useDashboardContext } from "../pages/DashboardLayout";
import links from "../utils/links";
import { NavLink } from "react-router-dom";

const NavLinks = ({ isBigSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div>
      <div className="nav-links" onClick={isBigSidebar ? null : toggleSidebar}>
        {links.map((link) => {
          const { text, path, icon } = link;
          const { role } = user;
          if (path === "admin" && role !== "admin") return;
          return (
            <NavLink to={path} key={text} className="nav-link" end>
              <span className="icon">{icon}</span>
              {text}
            </NavLink>
          );
        })}
      </div>
    </div>
  );
};
export default NavLinks;
