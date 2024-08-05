import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import BackIcon from "@/components/Icons/BackIcon";

import NextButton from "./NextButton";

const ContentActivity: ActivityComponentType = () => {
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
      <main className="flex h-full px-4">contentActivity</main>
      <footer className="sticky bottom-0 z-50">
        <NextButton activityName={"MainActivity" as never} />
      </footer>
    </AppScreen>
  );
};

export default ContentActivity;
