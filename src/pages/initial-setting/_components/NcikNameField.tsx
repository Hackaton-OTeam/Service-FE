import { Input } from "@ui/components/ui/input";
import { cn } from "@ui/lib/utils";

interface NickNameFieldProps {
  className?: string;
}

const NickNameField = (props: NickNameFieldProps) => {
  const { className } = props;
  return (
    <Input
      type="text"
      className={cn(
        className,
        "flex h-14 rounded-[39px] border-2 border-brand pl-7 text-xl font-bold text-brand",
      )}
    />
  );
};

export default NickNameField;
