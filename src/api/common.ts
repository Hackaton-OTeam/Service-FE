import { KnowledgeDTO, ScrapKnowledgeParams } from "@/types/commonType";

import { instance } from "@/api/instance";

export const getCommonList = async () => {
  const { data } = await instance.get<KnowledgeDTO[]>("/knowledge/today");

  return data;
};

export const scrapKnowledge = async ({
  knowledgeId,
  userEmail,
}: ScrapKnowledgeParams) => {
  const { data } = await instance.post(
    `/scrap/knowledge-save?knowledgeId=${knowledgeId}&userEmail=${userEmail}`,
  );

  return data;
};
