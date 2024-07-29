import { LoaderCircleIcon } from "@ui/components/ui/icon";
import { Button } from "@ui/components/ui/button";

import { useInitialSettingFlow } from "@/utils/useInitialSettingFlow";
import { FormType } from "@/hooks/useInitialSettingForm";

import { useNavigate } from "@/router";

interface NextStepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
  number?: number;
  params?: {
    form: FormType;
  } & Record<string, unknown>;
  isLoading?: boolean;
}

const NextStepButton = (props: NextStepButtonProps) => {
  const { activityName, disabled, params, number, isLoading, ...rest } = props;
  const { push } = useInitialSettingFlow();
  const navigate = useNavigate();

  const handleClick = async () => {
    if (activityName === "CompleteActivity") {
      // TODO:api 연결
    } else if (activityName === "MainActivity") {
      navigate("/home", {
        replace: true,
      });
      return;
    }

    const updatedParams = {
      ...params,
      number: number ? number + 1 : 1, // Increment the number or default to 1
    };

    push(activityName, updatedParams);
    // push(activityName, params || {});
  };

  return (
    <Button
      className="hover:bg-brandHover h-16 w-full rounded-none bg-brand text-base font-extrabold"
      onClick={handleClick}
      disabled={disabled || isLoading}
      {...rest}
    >
      {isLoading ? <LoaderCircleIcon className="animate-spin" /> : "다음으로"}
    </Button>
  );
};

export default NextStepButton;
