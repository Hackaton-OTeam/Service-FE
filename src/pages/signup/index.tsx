import { PWInputField } from "./_components/PWInputField";
import { MailInputField } from "./_components/MailInputField";
import Nav from "@/components/Nav";
import ErrorMentBox from "./_components/ErrorMentBox";

import { useState } from "react";

const SignUp = () => {
  const Regex1 = /^(?=.*[A-Za-z])(?=.*[0-9!@#$%^&*(),.?":{}|<>])/;
  const Regex2 = /^(?=.*[0-9])(?=.*[!@#$%^&*(),.?":{}|<>])(?=.*[A-Za-z])/;
  const CommonRegex = /[A-Za-z0-9!@#$%^&*(),.?":{}|<>]{6,20}$/;

  const UserOption2Regex = new RegExp(
    `(${Regex1.source})|(${Regex2.source})${CommonRegex.source}`,
  );

  const [userOption1, setUserOption1] = useState("");
  const [userOption2, setUserOption2] = useState("");
  const [checkOption2, setCheckOption2] = useState("");
  const [isOption1Pass, setIsOption1Pass] = useState(false);
  const [isOption2Pass, setIsOption2Pass] = useState(false);
  const [isCheckOption2Pass, setIsCheckOption2Pass] = useState(false);

  const [errorMent, setErrorMent] = useState<{
    option1: string;
    option2: string;
  }>({ option1: "", option2: "" });

  const handleOption1Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserOption1(event.target.value);
    if (event.target.value === "") {
      setErrorMent(prev => ({
        ...prev,
        option1: "dsafsdfdf",
      }));
      return;
    }
    //TODO: 이메일 인증 체크하는 api 연결
    setIsOption1Pass(true);
  };

  const handleOption2Change = (event: React.ChangeEvent<HTMLInputElement>) => {
    setUserOption2(event.target.value);
    if (!UserOption2Regex.test(userOption2)) {
      setErrorMent(prev => ({
        ...prev,
        option2:
          "영문 대문자와 소문자, 특수문자 중 2가지 이상을 조합하여 6~20자로 입력해주세요.",
      }));
      setIsOption2Pass(false);
      return;
    } else {
      setErrorMent(prev => ({
        ...prev,
        option2: "",
      }));
      setIsOption2Pass(true);
    }
  };

  const handleCheckOption2Change = (
    event: React.ChangeEvent<HTMLInputElement>,
  ) => {
    setCheckOption2(event.target.value);
    if (
      userOption2 === event.target.value &&
      userOption2 !== "" &&
      event.target.value !== ""
    ) {
      setErrorMent(prev => ({
        ...prev,
        option2: "비밀번호가 일치합니다.",
      }));
      setIsCheckOption2Pass(true);
      return;
    } else {
      setErrorMent(prev => ({
        ...prev,
        option2: "비밀번호가 일치하지 않습니다.",
      }));
      setIsCheckOption2Pass(false);
      return;
    }
  };

  const handleSignup = () => {
    setErrorMent({ option1: "", option2: "" });
  };

  return (
    <main className="flex h-full flex-col">
      <header className="sticky left-0 top-0 z-10 bg-white py-2">
        <Nav backLink="/login" NavTitle="회원가입" />
      </header>
      <main className="flex h-full flex-col items-center justify-start gap-10 px-4">
        <main className="flex w-full flex-col gap-16 pt-5">
          <div className="flex w-full flex-col gap-[7px]">
            <div className="pl-[2px] text-xl font-bold">이메일</div>
            <div className="flex flex-col gap-[10px]">
              <div className="flex gap-[15px]">
                <MailInputField
                  placeholder="이메일"
                  value={userOption1}
                  onChange={handleOption1Change}
                  autoComplete="off"
                />
              </div>
              <ErrorMentBox ment={errorMent.option1} isPass={isOption1Pass} />
            </div>
          </div>
          <div className="flex w-full flex-col gap-[7px]">
            <div className="pl-[2px] text-xl font-bold">비밀번호</div>
            <div className="flex flex-col gap-4">
              <PWInputField
                placeholder="비밀번호"
                value={userOption2}
                onChange={handleOption2Change}
                isPass={isOption2Pass}
                autoComplete="off"
              />
              <div className="flex flex-col gap-[10px]">
                <PWInputField
                  placeholder="비밀번호 확인"
                  doubleCheck
                  value={checkOption2}
                  onChange={handleCheckOption2Change}
                  autoComplete="off"
                />
                <ErrorMentBox
                  ment={errorMent.option2}
                  isPass={isCheckOption2Pass}
                />
              </div>
            </div>
          </div>
        </main>
        <footer></footer>
      </main>
    </main>
  );
};

export default SignUp;
