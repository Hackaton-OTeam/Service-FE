import UserProfileSection from "./UserProfileSection";

import AccountSettingSection from "@/pages/mypage/_components/AccountSettingSection";

const MainSection = () => {
  return (
    <section className="flex w-full flex-col items-center gap-8 py-5">
      <UserProfileSection />
      <AccountSettingSection />
    </section>
  );
};

export default MainSection;
