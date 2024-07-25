import LevelIconImage from "@/assets/Level.png";

const LevelIcon = () => {
  <div className="flex items-center justify-center">
    <img
      src={LevelIconImage}
      className="h-auto w-[18px]"
      loading="lazy"
      alt="MailIcon"
    />
  </div>;
};

export default LevelIcon;
