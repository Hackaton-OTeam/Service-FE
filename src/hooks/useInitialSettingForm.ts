import { z } from "zod";
import { UseFormReturn, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

export type FormSchemaType = z.infer<typeof FormSchema>;
export type FormType = UseFormReturn<FormSchemaType, unknown, undefined>;

export const FormSchema = z.object({
  nickname: z.string(),
  category: z.array(z.string()),
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
