import { initialSetting } from "@/api/initial";

import { InitialSettingRequestParams } from "@/types/initialType";
import { useMutation } from "@tanstack/react-query";

export const useMutationInitialSetting = () => {
  const mutation = useMutation({
    mutationFn: ({ userName, categories }: InitialSettingRequestParams) =>
      initialSetting({ userName, categories }),
    onSuccess: (response: string) => {
      return response;
    },
  });

  return mutation;
};
