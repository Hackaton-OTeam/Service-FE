import Nav from "@/components/Nav";
import { Toaster } from "@ui/components/ui/toaster";
import { Outlet, useLocation } from "react-router-dom";

const App = () => {
  const { pathname } = useLocation();

  return (
    <section className="relative flex h-dvh w-screen flex-col">
      <Toaster className="top-5" isDestructive />

      <header className="sticky left-0 top-0 z-10 bg-white">
        <Nav />
      </header>
      <section className="relative flex h-dvh w-screen flex-col">
        <main className="w-full grow">
          <Outlet />
        </main>
      </section>
    </section>
  );
};

export default App;
