import BookMarkIcon from "@/components/BookMarkIcon";
import HomeIcon from "@/components/HomeIcon";
import MyPageIcon from "@/components/MyPageIcon";
import { useLocation } from "react-router-dom";

const BottomNav = () => {
  const location = useLocation();

  return (
    <nav className="flex h-16 w-full items-center justify-center gap-x-24">
      <HomeIcon isActive={location.pathname === "/home"} />
      <BookMarkIcon isActive={location.pathname === "/bookmark"} />
      <MyPageIcon isActive={location.pathname === "/mypage"} />
    </nav>
  );
};

export default BottomNav;
