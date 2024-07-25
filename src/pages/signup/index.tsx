import Logo from "@/components/Logo";

const SignUp = () => {
  return (
    <main className="flex h-full flex-col items-center justify-start gap-10 px-4">
      <section className="flex flex-col gap-4 pt-16">
        <Logo size="12%" className="ml-1 justify-start" />
        <div className="text-2xl font-semibold">
          <p>서비스 이용을 위해</p>
          <p>이용약관 동의가 필요합니다.</p>
        </div>
      </section>
    </main>
  );
};

export default SignUp;
