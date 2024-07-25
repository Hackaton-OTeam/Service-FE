import Logo from "@/components/Logo";
import { MailInputField } from "@/pages/login/components/MailInputField";
import { PWInputField } from "@/pages/login/components/PWInputField";

const Login = () => {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <section className="flex flex-col items-center justify-center gap-3">
        <Logo size={"20%"} />
        <div>서비스명 이미지로 들어올 것</div>
      </section>
      <main className="w-full px-8">
        <MailInputField placeholder="이메일을 입력해주세요." />
        <PWInputField placeholder="비밀번호를 입력해주세요." />
      </main>
    </main>
  );
};

export default Login;
