import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import BackIcon from "@/components/Icons/BackIcon";

import VocaItem from "./VocaItem";
import NextButton from "./NextButton";
import { Activity, ActivityFooter, ActivityContent } from "./Activity";

type VocaParams = {
  chapterId: number;
  chapterName: string;
};

const VocaActivity: ActivityComponentType<VocaParams> = ({ params }) => {
  const { chapterId, chapterName } = params;

  return (
    <AppScreen
      appBar={{
        border: false,
        height: "56px",
        backButton: {
          renderIcon: () => <BackIcon />,
          ariaLabel: "Go Back",
        },
        title: <div className="text-xl font-bold">{chapterName}</div>,
      }}
    >
      <Activity>
        <ActivityContent>
          <main className="flex flex-col gap-5 px-4">
            <div>지금 voca</div>
            <section className="flex flex-col gap-[23px]">
              <VocaItem
                isScrap={true}
                word={"날조"}
                wordClass={"품사"}
                description={"예시문장"}
                example="예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문"
              />
              <VocaItem
                isScrap={false}
                word={"날조"}
                wordClass={"품사"}
                description={"예시문장"}
                example="예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문예문"
              />
              <div>chapterId: {chapterId}</div>
              <div>chapterName: {chapterName}</div>
            </section>
          </main>
          <ActivityFooter>
            <NextButton activityName={"MainActivity" as never} />
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default VocaActivity;
