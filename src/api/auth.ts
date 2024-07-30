import { LoginRequestParams, CheckEmailParams } from "@/types/authType";

import { instance } from "@/api/instance";

export const login = async ({
  userEmail,
  userPassword,
}: LoginRequestParams) => {
  const { data } = await instance.post("/user/login", {
    userEmail,
    userPassword,
  });

  return data;
};

export const checkEmail = async ({ userEmail }: CheckEmailParams) => {
  const { data } = await instance.post("/user/email-check", {
    userEmail,
  });
  return data;
};
