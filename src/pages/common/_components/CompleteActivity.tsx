import { useLocation } from "react-router-dom";
import { ActivityComponentType } from "@stackflow/react";
import { AppScreen } from "@stackflow/plugin-basic-ui";

import BackIcon from "@/components/Icons/BackIcon";

import NextButton from "./NextButton";

const CompleteActivity: ActivityComponentType = () => {
  //오늘의 어휘 id (api 연결용)
  const location = useLocation();
  const { state } = location;
  const { commonId } = state;

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
        <NextButton activityName={"ContentActivity" as never} />
      </footer>
    </AppScreen>
  );
};

export default CompleteActivity;
