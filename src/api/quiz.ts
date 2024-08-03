import { QuizDTO, QuizResponseDTO } from "@/types/quizType";

import { instance } from "@/api/instance";

export const getQuizList = async (chapterId: number) => {
  const { data } = await instance.get<QuizDTO[]>(
    `/quiz/quizzes?chapterId=${chapterId}`,
  );
  return data;
};

export const getQuizAnswer = async (quizId: number) => {
  const { data } = await instance.get<QuizResponseDTO>(
    `/quiz/details?quizId=${quizId}`,
  );

  return data;
};
