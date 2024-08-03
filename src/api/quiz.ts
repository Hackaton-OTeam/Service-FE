import { QuizDTO } from "@/types/quizType";

import { instance } from "@/api/instance";

export const getQuizList = async (chapterId: number) => {
  const { data } = await instance.get<QuizDTO[]>(
    `/quiz/quizzes?chapterId=${chapterId}`,
  );
  return data;
};
