import { cn } from "@ui/lib/utils";

interface ErrorMentBoxProps {
  isPass?: boolean;
}

const ErrorMentBox = (props: ErrorMentBoxProps) => {
  const { isPass } = props;

  return (
    <div
      className={cn("flex items-center text-[13px]", {
        "text-brand": isPass,
        "text-brandError": !isPass,
      })}
    ></div>
  );
};

export default ErrorMentBox;
