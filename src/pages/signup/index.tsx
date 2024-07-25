import { PWInputField } from "./components/PWInputField";
import { MailInputField } from "./components/MailInputField";

const SignUp = () => {
  return (
    <main className="flex h-full flex-col items-center justify-start gap-10 px-4">
      <main className="flex w-full flex-col pt-5">
        <div className="flex w-full flex-col gap-[7px]">
          <div className="pl-[2px] text-xl font-bold">이메일</div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-[15px]">
              <MailInputField placeholder="이메일" />
            </div>
            <div>성공/에러메세지 출력</div>
          </div>
        </div>
        <div className="flex w-full flex-col gap-[7px]">
          <div className="pl-[2px] text-xl font-bold">비밀번호</div>
          <div className="flex flex-col gap-4">
            <PWInputField placeholder="비밀번호" />
            <div className="flex flex-col gap-1">
              <PWInputField placeholder="비밀번호 확인" />
              <div>성공/에러메세지 출력</div>
            </div>
          </div>
        </div>
      </main>
      <footer></footer>
    </main>
  );
};

export default SignUp;
