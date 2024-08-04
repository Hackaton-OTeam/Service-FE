import { useEffect, useState } from "react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import Nav from "@/components/Nav";

import { useManageUser } from "@/hooks/useManageUser";
import { useQueryGetLevelStatus } from "@/hooks/queries/useQueryGetLevelStatus";

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
  const [imageSrc, setImageSrc] = useState<string | undefined>(undefined);

  //   const { data } = useQueryGetLevelStatus();
  //   console.log(data);
  // const {wordCount, level, wordMaxCount} = data;

  //나중에 api로 불러온 걸로 수정하기
  const { userLevel } = useManageUser();

  useEffect(() => {
    if (userLevel) {
      const image = images.find(img => img.level === userLevel);
      if (image) setImageSrc(image.imgSrc);
    }
  }, [userLevel]);

  return (
    <AppScreen>
      <header className="sticky left-0 top-0 z-10 py-2">
        <Nav backLink="/home" />
      </header>
      <main
        className="flex flex-col items-center justify-between px-4 pb-7"
        style={{ height: "calc(100% - 56px)" }}
      >
        <LevelHeader />
        <section className="flex w-full items-center justify-center">
          <img
            src={imageSrc}
            className="w-full"
            loading="lazy"
            alt="levelImage"
          />
        </section>
        <LevelFooter />
      </main>
    </AppScreen>
  );
};

export default LevelActivity;