import LogoImage from "@/assets/logo.png";

interface JustLogoProps {
  size?: number | string;
}

const JustLogo = (props: JustLogoProps) => {
  const { size = 42 } = props;
  return (
    <div className="flex items-center justify-center">
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

export default JustLogo;
