import { instance } from "@/api/instance";
import { InitialSettingRequestParams } from "@/types/initialType";

export const initialSetting = async ({
  userName,
  categories,
}: InitialSettingRequestParams) => {
  const { data } = await instance.post("/user/initial-setting", {
    userName,
    categories,
  });

  return data;
};
