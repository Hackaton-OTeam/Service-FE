import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import BackIcon from "@/components/Icons/BackIcon";

import NextButton from "./NextButton";

type CompleteParams = {
  commonId: number;
};

const CompleteActivity: ActivityComponentType<CompleteParams> = ({
  params,
}) => {
  const { commonId } = params;

  return (
    <AppScreen
      appBar={{
        border: false,
        height: "56px",
        backButton: {
          renderIcon: () => <BackIcon />,
          ariaLabel: "Go Back",
        },
        title: <div className="text-xl font-bold">매일 어휘 한 조각</div>,
      }}
    >
      <main className="flex h-full px-4">mainActivity</main>
      <footer className="sticky bottom-0 z-50">
        <NextButton
          activityName={"ContentActivity" as never}
          commonId={commonId}
        />
      </footer>
    </AppScreen>
  );
};

export default CompleteActivity;
