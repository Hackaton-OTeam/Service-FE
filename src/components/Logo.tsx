import { cn } from "@ui/lib/utils";

import LogoImage from "@/assets/logo.png";

interface LogoProps {
  size?: number | string;
  isNav?: boolean;
}

const Logo = (props: LogoProps) => {
  const { size = 42, isNav } = props;
  return (
    <div className={cn("flex items-center", { "justify-center": !isNav })}>
      <img
        src={LogoImage}
        width={size}
        className="h-auto"
        loading="lazy"
        alt="로고"
      />
    </div>
  );
};

export default Logo;
