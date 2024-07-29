import { useInitialSettingForm } from "@/hooks/useInitialSettingForm";
import { Stack } from "@/utils/initialSettingFlow";
import { Form } from "@ui/components/ui/form";

const InitialQuiz = () => {
  const { form } = useInitialSettingForm();

  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="flex h-full flex-col justify-between px-4 py-20">
        <Form {...form}>
          <Stack />
        </Form>
      </div>
    </main>
  );
};

export default InitialQuiz;
