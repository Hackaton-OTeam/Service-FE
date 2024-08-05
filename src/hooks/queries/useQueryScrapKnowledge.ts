import { useSuspenseQuery } from "@tanstack/react-query";

import { getScrapKnowledge } from "@/api/scrap";

export const useQueryScrapWord = (userEmail: string) => {
  const { data } = useSuspenseQuery({
    queryKey: ["scrap-knowledge-list", userEmail],
    queryFn: () => getScrapKnowledge(userEmail),
  });

  return { data };
};