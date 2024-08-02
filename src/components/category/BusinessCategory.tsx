import BusinessCategoryImage from "@/assets/BusinessCategory.png";

const BusinessCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={BusinessCategoryImage} className="h-auto w-32" loading="lazy" />
    </div>
  );
};

export default BusinessCategory;
