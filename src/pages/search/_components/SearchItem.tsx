import { useState } from "react";
import { cn } from "@ui/lib/utils";

import SubBookMarkIcon from "@/components/Icons/SubBookMarkIcon";

import { useMutationScrapWord } from "@/hooks/mutation/useMutationScrapWord";
import { useMutationCancelWord } from "@/hooks/mutation/useMutationCancelWord";

interface SearchItemProps {
  wordId: number;
  isScrap: boolean;
  word: string;
  wordClass: string;
  description: string;
  example: string;
}

const SearchItem = (props: SearchItemProps) => {
  const { isScrap, wordId, word, wordClass, description, example } = props;

  const [isBookmarked, setIsBookmarked] = useState(isScrap);

  const mutation = useMutationScrapWord();
  const cancelMutation = useMutationCancelWord();
  const userEmail = localStorage.getItem("userEmail")!;

  const handleBookmarkClick = () => {
    if (!isBookmarked) {
      setIsBookmarked(true);

      mutation.mutate(
        { userEmail, wordId: wordId },
        {
          onSuccess: () => {
            return;
          },
        },
      );
    } else {
      setIsBookmarked(false);

      cancelMutation.mutate(
        { userEmail, knowledgeId: wordId },
        {
          onSuccess: () => {
            return;
          },
        },
      );
    }
  };

  const parts = example.split(word).reduce((acc, part, index, arr) => {
    if (index < arr.length - 1) {
      return [...acc, part, word];
    }
    return [...acc, part];
  }, [] as string[]);

  return (
    <div
      className={cn(
        "flex flex-col gap-[13px] rounded-[37px] border-2 px-5 py-[30px]",
        {
          "border-brandGray": !isBookmarked,
          "border-brand": isBookmarked,
        },
      )}
    >
      <section className="flex flex-col gap-[6px]">
        <div className="flex flex-col gap-0.5 text-brand">
          <div className="flex w-full items-center justify-between">
            <div className="text-xl font-bold">{word}</div>
            <SubBookMarkIcon
              isActive={isBookmarked}
              onClick={handleBookmarkClick}
            />
          </div>

          <div className="flex w-fit items-center justify-center rounded-[36px] border border-brand px-[5px] py-px text-center text-[10px] font-bold">
            {wordClass}
          </div>
        </div>
        <div className="text-base font-semibold">{description}</div>
      </section>
      <section className="text-[15px] text-brandSubText">
        {parts.map((part, index) =>
          part.toLowerCase() === word.toLowerCase() ? (
            <span key={index} className="font-semibold text-brand">
              {part}
            </span>
          ) : (
            part
          ),
        )}
      </section>
    </div>
  );
};

export default SearchItem;
