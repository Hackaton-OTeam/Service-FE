import LegalCategoryImage from "@/assets/LegalCategory.png";

const LegalCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={LegalCategoryImage} className="h-auto w-32" loading="lazy" />
    </div>
  );
};

export default LegalCategory;
