import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import Nav from "@/components/Nav";

import NextButton from "@/pages/common/_components/NextButton";

const MainActivity: ActivityComponentType = () => {
  return (
    <AppScreen>
      <header className="sticky left-0 top-0 z-10 py-2">
        <Nav backLink="/home" NavTitle="매일 어휘 한 조각" />
      </header>
      <main className="flex h-full px-4">mainActivity</main>
      <footer className="sticky bottom-0 z-50">
        <NextButton activityName={"ContentActivity" as never} />
      </footer>
    </AppScreen>
  );
};

export default MainActivity;
