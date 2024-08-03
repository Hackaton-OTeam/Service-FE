import { useEffect, useState } from "react";
import { LoaderCircleIcon } from "lucide-react";
import { Button } from "@ui/components/ui/button";

import { QuizDTO } from "@/types/quizType";

import { useQuizFlow } from "@/utils/useQuizFlow";

interface NextButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  activityName: never;
  chapterId: number;
  chapterName: string;
  params?: {
    step?: number;
    quizLsit?: QuizDTO[];
  };
  disabled?: boolean;
  isLoading?: boolean;
  onClick?: () => void; // 클릭 핸들러 추가
}

const NextButton = (props: NextButtonProps) => {
  const { activityName, disabled, params, isLoading, onClick } = props;
  const { push } = useQuizFlow();

  const [buttonText, setButtonText] = useState("");

  useEffect(() => {
    if (activityName === "QuizAnswerActivity") {
      setButtonText("정답 확인");
    } else if (activityName === "VocaActivity") {
      setButtonText("오늘 학습 단어 보기");
    } else if (activityName === "MainActivity") {
      setButtonText("완료");
    } else {
      setButtonText("다음");
    }
  }, [activityName]);

  const handleClick = async () => {
    push(activityName, params || {});
  };

  return (
    <Button
      variant={disabled ? "quizButton" : "brand"}
      className="w-full rounded-none py-2 text-xl font-bold"
      onClick={onClick ? onClick : handleClick}
      disabled={disabled || isLoading}
    >
      {isLoading ? <LoaderCircleIcon className="animate-spin" /> : buttonText}
    </Button>
  );
};

export default NextButton;
