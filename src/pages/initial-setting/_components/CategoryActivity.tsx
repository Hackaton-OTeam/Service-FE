import { ActivityComponentType } from "@stackflow/react";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

import { AppScreen } from "@stackflow/plugin-basic-ui";
import NextStepButton from "./NextStepButton";
import BackIcon from "@/components/BackIcon";

interface CategoryParams extends ActivityParams {}

const CategoryActivity: ActivityComponentType<CategoryParams> = ({
  params,
}) => {
  const { form } = params;

  return (
    <AppScreen
      appBar={{
        border: false,
        height: "56px",
        backButton: {
          renderIcon: () => <BackIcon />,
          ariaLabel: "Go Back",
        },
      }}
    >
      <Activity>
        <ActivityContent>
          <section className="grow">
            <div>지금은 complete</div>
          </section>
          <ActivityFooter>
            <NextStepButton
              activityName={"CompleteActivity" as never}
              disabled={false}
            ></NextStepButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CategoryActivity;
