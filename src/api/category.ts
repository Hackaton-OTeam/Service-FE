import { CategoryListResponse } from "@/types/categoryType";

import { instance } from "@/api/instance";

export const getCategoryList = async () => {
  const { data } = await instance.get<CategoryListResponse>("/category");
  return data;
};
