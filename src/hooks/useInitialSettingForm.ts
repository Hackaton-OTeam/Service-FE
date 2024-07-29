import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

export const FormSchema = z.object({
  nickname: z.string().min(1, "닉네임을 입력해주세요 "),
  category: z
    .array(z.string())
    .min(1, "최소 하나의 카테고리를 선택해야 합니다."),
});

//TODO: 나중에 api 연결해야함.
export const useInitialSettingForm = () => {
  const form = useForm<FormSchemaType>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      nickname: "",
      category: [],
    },
    mode: "onChange",
  });

  const onSubmit = async (data: FormSchemaType) => {
    const { nickname, category } = data;

    //TODO: api 연결할 부분
    return "nickname=" + nickname + " category=" + category;
  };

  return { form, onSubmit };
};
