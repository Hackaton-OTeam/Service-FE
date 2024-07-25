import { Toaster } from "@ui/components/ui/toaster";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <>
      <Toaster className="top-5" isDestructive />

      <section className="relative flex h-dvh w-screen flex-col">
        <main className="w-full grow">
          <Outlet />
        </main>
      </section>
    </>
  );
};

export default App;
