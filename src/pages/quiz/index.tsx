import Nav from "@/components/Nav";

import { Stack } from "@/utils/quizStackflow";

const QuizPage = () => {
  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav backLink="/home" />
      </header>
      <Stack />
    </main>
  );
};

export default QuizPage;
