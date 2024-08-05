import SubBookMarkIcon from "@/components/Icons/SubBookMarkIcon";
import ClassComponent from "@/components/ClassComponent";

interface CompleteSectionProps {
  id: number;
  image: string;
  title1: string;
  title2: string;
  explain: string;
  class1: string;
  class2: string;
  itemStyle: React.CSSProperties;
}

const size = [
  { id: 1, width: 313 },
  { id: 2, width: 316 },
  { id: 3, width: 313 },
  { id: 4, width: 265 },
];

const CompleteSection = (props: CompleteSectionProps) => {
  const { id, image, title1, title2, explain, class1, class2, itemStyle } =
    props;

  const width = size.find(s => s.id === id)?.width || "100%";

  return (
    <section
      className="relative mb-auto mt-7 flex h-[484px] w-[361px] flex-col justify-start rounded-[41px] border-[3px] border-brandGray px-6 pt-9"
      style={itemStyle}
    >
      <div className="absolute right-8 top-5 z-30 flex gap-1">
        <div className="text-base font-bold text-brand">스크랩하기</div>
        <SubBookMarkIcon isActive={false} />
      </div>
      <div className="z-20 flex flex-col gap-[14px]">
        <div className="flex gap-2">
          <ClassComponent title={class1} />
          <ClassComponent title={class2} />
        </div>
        <h1 className="text-[27px] font-extrabold leading-tight">
          {title1}
          <br />
          {title2}
        </h1>
        <p className="text-base font-extrabold text-brandSubText">{explain}</p>
      </div>
      <div className="absolute bottom-4 right-4 z-10" style={{ width }}>
        <img src={image} alt="First Apple" loading="lazy" />
      </div>
    </section>
  );
};

export default CompleteSection;
