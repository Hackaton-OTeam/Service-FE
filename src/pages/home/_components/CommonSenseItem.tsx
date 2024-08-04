import ClassComponent from "@/components/ClassComponent";

import { useManageCommonSense } from "@/hooks/useManageCommonSense";

interface CommonSenseItemProps {
  id: number;
}

const CommonSenseItem = (props: CommonSenseItemProps) => {
  const { id } = props;

  const { image, title1, title2, explain, class1, class2, backgroundColor } =
    useManageCommonSense(id, "first");

  const itemStyle = {
    backgroundColor: backgroundColor.startsWith("linear-gradient")
      ? undefined
      : backgroundColor, // 단일 색상인 경우 적용
    backgroundImage: backgroundColor.startsWith("linear-gradient")
      ? backgroundColor
      : undefined, // 그라데이션인 경우 적용
  };

  return (
    <div
      className="relative flex h-[347px] w-[292px] flex-col gap-4 rounded-[34px] px-4 pt-10 font-bold"
      style={itemStyle}
    >
      <div className="z-20 flex flex-col gap-[10px]">
        <h1 className="text-[27px] leading-tight">
          {title1}
          <br />
          {title2}
        </h1>
        <p className="text-base text-[#8c8c8c]">{explain}</p>
      </div>
      <div className="z-20 flex gap-2">
        <ClassComponent title={class1} />
        <ClassComponent title={class2} />
      </div>
      <div className="absolute bottom-2 right-2 z-10">
        <img
          src={image}
          alt="First Apple"
          className="h-[202px] w-auto"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default CommonSenseItem;
