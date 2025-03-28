import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";

export const LayoutApp = ({ children }) => {
  return (
    <section className="min-h-screen w-full">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </section>
  );
};
