import { Link, useLocation } from "react-router-dom";

import usePreviousPath from "@/hooks/usePreviousPath";

import Logo from "@/components/Logo";
import BackIcon from "@/components/BackIcon";

const Nav = () => {
  const { pathname } = useLocation();
  const [previousPath, popPreviousPath] = usePreviousPath();

  const noNav = ["/", "/login"];
  if (noNav.includes(pathname)) return null;

  const showLogo = ["/home"].includes(pathname);

  return (
    <nav className="my-2 flex h-10 w-full justify-between self-stretch px-4">
      {showLogo ? (
        <Logo size={"10%"} isNav />
      ) : (
        <div className="flex items-center">
          <Link to={previousPath} onClick={popPreviousPath}>
            <BackIcon />
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Nav;
