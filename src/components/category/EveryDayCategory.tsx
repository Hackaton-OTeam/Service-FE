import EveryDayCategoryImage from "@/assets/EveryDayCategory.png";

const EveryDayCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={EveryDayCategoryImage} className="h-auto w-32" loading="lazy" />
    </div>
  );
};

export default EveryDayCategory;
