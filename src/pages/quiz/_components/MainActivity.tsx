import { ActivityComponentType } from "@stackflow/react";

import ProgressBar from "@/components/ProgressBar";
import DountChart from "@/components/DountChart";

const MainActivity: ActivityComponentType = () => {
  return (
    <main className="flex h-full flex-col items-center justify-start gap-10 px-4">
      quizPage임
      <DountChart percent={0.65} />
      <ProgressBar percent={70} />
    </main>
  );
};

export default MainActivity;
