import { useQueryCategoryList } from "@/hooks/queries/useQueryCategoryList";

interface CategoryItemProps {
  title: string;
  subtitle: string;
}

const CategoryItem = (props: CategoryItemProps) => {
  const { title, subtitle } = props;

  return (
    <div className="flex h-44 w-44 flex-col justify-end gap-0.5 px-[13px]">
      <div className="text-xl font-bold">{title}</div>
      <div className="text-[13px] font-medium">{subtitle}</div>
    </div>
  );
};

const CategorySection = () => {
  const { data: categories } = useQueryCategoryList();

  return (
    <section className="flex w-full flex-col gap-1">
      <div className="pl-px text-xl font-bold">카테고리별 어휘 학습</div>
      <section className="mx-auto grid grid-cols-2 grid-rows-3 gap-x-[9px] gap-y-2.5">
        {categories.map(({ id, category, categoryExplain }) => (
          <CategoryItem key={id} title={category} subtitle={categoryExplain} />
        ))}
      </section>
    </section>
  );
};

export default CategorySection;
