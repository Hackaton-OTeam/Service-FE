const EtcSection = () => {
  const handleLogOut = () => {
    //TODO: 로그아웃 API 연결
    localStorage.removeItem("userEmail");
  };

  return (
    <div className="flex w-full flex-col items-center gap-1">
      <div className="w-full text-base font-medium">기타</div>
      <section className="flex w-full flex-col gap-4 rounded-[15px] border-2 border-brandGray px-5 py-4 text-[15px] font-normal">
        <div onClick={handleLogOut}>로그아웃</div>
      </section>
    </div>
  );
};

export default EtcSection;