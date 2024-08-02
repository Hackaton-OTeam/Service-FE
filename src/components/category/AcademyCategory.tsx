import AcademyCategoryImage from "@/assets/AcademyCategory.png";

const AcademyCategory = () => {
  return (
    <div className="flex items-center justify-center">
      <img src={AcademyCategoryImage} className="h-auto w-32" loading="lazy" />
    </div>
  );
};

export default AcademyCategory;
