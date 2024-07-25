import Logo from "@/components/Logo";
import { MailInputField } from "@/pages/login/components/MailInputField";
import { PWInputField } from "@/pages/login/components/PWInputField";
import { Link } from "@/router";
import { Button } from "@ui/components/ui/button";
import { useToast } from "@ui/components/ui/use-toast";

const Login = () => {
  //TODO: 백엔드 api 연결해서 계정이 없는 경우 에러가 발생하게 함.

  const { toast } = useToast();
  const handleLogin = () => {
    toast({
      title: "이메일 또는 비밀번호를 확인해주세요.",
      variant: "brandDestructive",
    });
  };

  return (
    <main className="flex h-full flex-col items-center justify-center gap-10 px-4">
      <section className="flex flex-col items-center justify-center gap-3">
        <Logo size={"20%"} />
        <div>서비스명 이미지로 들어올 것</div>
      </section>
      <main className="flex w-full flex-col gap-5">
        <MailInputField placeholder="이메일을 입력해주세요." />
        <PWInputField placeholder="비밀번호를 입력해주세요." />
      </main>
      <footer className="flex w-full flex-col items-center gap-4">
        <Button
          variant="brand"
          className="w-full text-xl font-semibold sm:w-80"
          onClick={handleLogin}
        >
          로그인
        </Button>

        <Link to="/signup" className="w-full sm:w-80">
          <Button variant="outline" className="w-full text-xl font-semibold">
            회원가입
          </Button>
        </Link>
      </footer>
    </main>
  );
};

export default Login;
