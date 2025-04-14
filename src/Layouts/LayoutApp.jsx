import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";

export const LayoutApp = ({ children }) => {
  return (
    <section className="min-h-screen overflow-x-hidden flex flex-col">
      <div className="absolute -top-28 -left-28 w-[500px] h-[500px] bg-gradient-to-tr from-blue-600/20 to-cyan-300/20 rounded-full blur-[80px] -z-10"></div>
      <NavBar />
      <main className="flex flex-col">{children}</main>
      <Footer />
    </section>
  );
};
