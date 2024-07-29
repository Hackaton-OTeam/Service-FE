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

interface CompleteParams extends ActivityParams {}

const CompleteActivity: ActivityComponentType<CompleteParams> = ({
  params,
}) => {
  const { form } = params;

  return (
    <AppScreen appBar={{ border: false }}>
      <Activity>
        <ActivityContent>
          <section className="grow">
            <div>지금은 complete</div>
          </section>
          <ActivityFooter>
            <NextStepButton
              activityName={"MainActivity" as never}
              disabled={false}
            ></NextStepButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default CompleteActivity;
