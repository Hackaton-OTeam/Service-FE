import NewsCategoryImage from "@/assets/NewsCategory.png";

const NewsCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={NewsCategoryImage} className="h-auto w-32" loading="lazy" />
    </div>
  );
};

export default NewsCategory;
