import { ActivityComponentType } from "@stackflow/react";
import {
  Activity,
  ActivityContent,
  ActivityFooter,
  ActivityHeader,
  ActivityParams,
} from "./Activity";

import {
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@ui/components/ui/form";

import { AppScreen, IconBack } from "@stackflow/plugin-basic-ui";
import NextStepButton from "./NextStepButton";
import { Input } from "@ui/components/ui/input";

interface NickNameParams extends ActivityParams {}

const NickNameActivity: ActivityComponentType<NickNameParams> = ({
  params,
}) => {
  const { form } = params;

  return (
    <AppScreen>
      <Activity>
        <ActivityContent>
          <section className="grow">
            <div>지금은 nickname</div>
            <IconBack />
          </section>
          <ActivityFooter>
            <NextStepButton
              activityName={"CategoryActivity" as never}
              disabled={false}
            ></NextStepButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default NickNameActivity;
