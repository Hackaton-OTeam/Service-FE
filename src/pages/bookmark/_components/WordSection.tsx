import { useQueryScrapWord } from "@/hooks/queries/useQueryScrapWord";

const WordSection = () => {
  const userEmail = localStorage.getItem("userEmail");
  const { data: scrapWords } = useQueryScrapWord(userEmail!);

  return <div>WordSection</div>;
};
export default WordSection;
