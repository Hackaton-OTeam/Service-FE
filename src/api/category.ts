import { CategoryDTO } from "@/types/categoryType";

import { instance } from "@/api/instance";

export const getCategoryList = async () => {
  const { data } = await instance.get<CategoryDTO[]>("/category");
  return data;
};
