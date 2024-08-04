const LevelHeader = () => {
  return (
    <section className="flex w-full flex-col gap-3 text-center">
      <div className="flex w-full justify-end">
        <div className="flex w-fit items-center justify-center rounded-[36px] border border-brand px-2.5 py-[3px] text-[13px] font-semibold text-brand">
          관직 설명
        </div>
      </div>
      <div className="flex flex-col gap-1">
        <div className="text-xl font-bold">나의 현재 관직은?</div>
        <div className="text-[40px] font-extrabold">유생</div>
      </div>
    </section>
  );
};

export default LevelHeader;
