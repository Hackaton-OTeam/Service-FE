import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import NumberIcon from "@/components/Icons/NumberIcon";
import BackIcon from "@/components/Icons/BackIcon";

import {
  Activity,
  ActivityContent,
  ActivityHeader,
  ActivityFooter,
} from "./Activity";

type QuizAnswerParams = {
  chapterId: number;
  chapterName: string;
  quizId: number;
  quizAnswer: string;
};

const QuizAnswerActivity: ActivityComponentType<QuizAnswerParams> = ({
  params,
}) => {
  const { chapterId, chapterName, quizId, quizAnswer } = params;

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
          <ActivityHeader>
            <NumberIcon number={1} />
            <h1 className="flex gap-2 text-2xl font-bold">
              <div>학력/경력을</div>
              <div className="text-brand">[&emsp;&emsp;&emsp;]</div>
              <div>한 의원</div>
            </h1>
          </ActivityHeader>
          <section>
            <div>chapterId: {chapterId}</div>
            <div>chapterName: {chapterName}</div>
            <div>quizId: {quizId}</div>
            <div>quizAnswer: {quizAnswer}</div>
          </section>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default QuizAnswerActivity;
