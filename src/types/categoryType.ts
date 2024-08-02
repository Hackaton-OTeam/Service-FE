export type CategoryDTO = {
  id: number;
  category: string;
  categoryExplain: string;
  file: ArrayBuffer;
};

export interface CategoryListResponse {
  categories: CategoryDTO[];
}
