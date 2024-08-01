import Nav from "@/components/Nav";
import DountChart from "@/components/DountChart";

const QuizPage = () => {
  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav backLink="/home" />
      </header>
      <main className="flex h-full flex-col items-center justify-start gap-10 bg-brand px-4">
        quizPage임
        <DountChart percent={0.65} />
      </main>
    </main>
  );
};

export default QuizPage;
