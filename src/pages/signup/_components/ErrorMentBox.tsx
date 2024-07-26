import { cn } from "@ui/lib/utils";

interface ErrorMentBoxProps {
  isPass?: boolean;
  ment: string;
}

const ErrorMentBox = (props: ErrorMentBoxProps) => {
  const { isPass, ment } = props;

  return (
    <div
      className={cn("flex items-center px-3 text-[13px]", {
        "text-brand": isPass,
        "text-brandError": !isPass,
      })}
    >
      {ment}
    </div>
  );
};

export default ErrorMentBox;
