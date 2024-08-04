import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@ui/components/ui/carousel";

import CommonSenseItem from "./CommonSenseItem";

const CommonSenseSection = () => {
  return (
    <section className="flex w-full flex-col gap-[10px]">
      <div className="pl-px text-xl font-bold">카테고리별 어휘 학습</div>
      <Carousel className="w-full max-w-full">
        <CarouselContent className="R-ml-4">
          {[1, 2, 3, 4].map(id => (
            <CarouselItem key={id} className="basis-5/6 pl-4">
              <CommonSenseItem id={id} />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </section>
  );
};

export default CommonSenseSection;
