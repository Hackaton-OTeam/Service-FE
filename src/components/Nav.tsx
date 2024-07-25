import { Link, useLocation } from "react-router-dom";
import usePreviousPath from "@/hooks/usePreviousPath";
import Logo from "@/components/Logo";
import BackIcon from "@/components/BackIcon";
import { cn } from "@ui/lib/utils";

const Nav = () => {
  const { pathname } = useLocation();
  const [previousPath, popPreviousPath] = usePreviousPath();

  const noNavPaths = ["/", "/login"];
  const showLogo = pathname === "/home";
  const showNav = !noNavPaths.includes(pathname);
  const NavTitle = "회원가입";

  if (!showNav) return null;

  return (
    <nav
      className={cn(
        "my-2 flex h-10 w-full self-stretch px-4",
        showLogo ? "justify-between" : "justify-start",
      )}
    >
      {showLogo ? (
        <Logo size="10%" isNav />
      ) : (
        <>
          <div className="flex items-center">
            <Link to={previousPath} onClick={popPreviousPath}>
              <BackIcon />
            </Link>
          </div>
          <div className="grow text-center text-2xl font-bold leading-10">
            {NavTitle}
          </div>
        </>
      )}
    </nav>
  );
};

export default Nav;
