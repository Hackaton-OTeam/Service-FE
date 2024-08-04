import { AppScreen } from "@stackflow/plugin-basic-ui";

import Nav from "@/components/Nav";

import LevelHeader from "./LevelHeader";

import LevelFooter from "@/pages/level/_components/LevelFooter";
import ThirdLevelImage from "@/assets/ThirdLevelImage.png";
import SecondLevelImage from "@/assets/SecondLevelImage.png";
import FourthLevelImage from "@/assets/FourthLevelImage.png";
import FirstLevelImage from "@/assets/FirstLevelImage.png";
import FinalLevelImage from "@/assets/FinalLevelImage.png";

const images = [
  { level: "유생", imgSrc: FirstLevelImage },
  { level: "문사", imgSrc: SecondLevelImage },
  { level: "학사", imgSrc: ThirdLevelImage },
  { level: "박사", imgSrc: FourthLevelImage },
  { level: "세종대왕", imgSrc: FinalLevelImage },
];

const LevelActivity = () => {
  return (
    <AppScreen>
      <header className="sticky left-0 top-0 z-10 py-2">
        <Nav backLink="/home" />
      </header>
      <main className="flex h-full flex-col items-center justify-start px-4">
        <LevelHeader />
        <section className="w-full">여기에 이미지 들어와야함</section>
        <LevelFooter />
      </main>
    </AppScreen>
  );
};

export default LevelActivity;
