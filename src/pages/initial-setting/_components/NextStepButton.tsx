import { LoaderCircleIcon } from "@ui/components/ui/icon";
import { Button } from "@ui/components/ui/button";

import { useInitialSettingFlow } from "@/utils/useInitialSettingFlow";
import { FormType } from "@/hooks/useInitialSettingForm";

import { useNavigate } from "@/router";

interface NextStepButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  disabled: boolean;
  params?: {
    form: FormType;
  } & Record<string, unknown>;
  isLoading?: boolean;
}

const NextStepButton = (props: NextStepButtonProps) => {
  const { activityName, disabled, params, isLoading, ...rest } = props;
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
    push(activityName, params || {});
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
