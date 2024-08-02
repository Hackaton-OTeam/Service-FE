import { Suspense } from "react";

import { Stack } from "@/utils/quizStackflow";

const QuizPage = () => {
  return (
    <main className="flex h-full flex-col">
      <Suspense>
        <Stack />
      </Suspense>
    </main>
  );
};

export default QuizPage;
