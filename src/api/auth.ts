import axios from "axios";

import { LoginRequestParams } from "@/types/authType";

export const login = async ({
  userEmail,
  userPassword,
}: LoginRequestParams) => {
  const { data } = await axios.post("/user/login", {
    userEmail,
    userPassword,
  });

  return data;
};
