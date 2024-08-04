import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import CloseIcon from "@/components/Icons/CloseIcon";

import LevelNav from "./LevelNav";

type ExplainParams = {
  nowLevel: string;
};

const ExplainActivity: ActivityComponentType<ExplainParams> = ({ params }) => {
  const { nowLevel } = params;

  return (
    <AppScreen>
      <header className="sticky left-0 top-0 z-10 py-2">
        <LevelNav />
      </header>
      hello
    </AppScreen>
  );
};

export default ExplainActivity;
