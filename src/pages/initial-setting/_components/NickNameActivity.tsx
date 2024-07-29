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

import { AppScreen } from "@stackflow/plugin-basic-ui";
import NextStepButton from "./NextStepButton";
import { Input } from "@ui/components/ui/input";
import NickNameField from "./NcikNameField";
import NumberIcon from "@/components/NumberIcon";

interface NickNameParams extends ActivityParams {}

const NickNameActivity: ActivityComponentType<NickNameParams> = ({
  params,
}) => {
  const { form } = params;

  const NowStep = 1;

  return (
    <AppScreen appBar={{ border: false, height: "56px" }}>
      <Activity>
        <ActivityContent>
          <ActivityHeader>
            <NumberIcon number={1} />
            <h1>뭐라고 불러드릴까요?</h1>
          </ActivityHeader>
          <section className="grow">
            <div>지금은 nickname</div>
            <NickNameField />
          </section>
          <ActivityFooter>
            <NextStepButton
              activityName={"CategoryActivity" as never}
              disabled={false}
              number={NowStep}
            ></NextStepButton>
          </ActivityFooter>
        </ActivityContent>
      </Activity>
    </AppScreen>
  );
};

export default NickNameActivity;
