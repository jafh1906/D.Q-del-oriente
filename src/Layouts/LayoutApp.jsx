import { Footer } from "../Components/Footer";
import { NavBar } from "../Components/NavBar";

export const LayoutApp = ({ children }) => {
  return (
    <section className="min-h-screen w-full overflow-hidden">
      <NavBar />
      <main className="flex-grow">{children}</main>
      <Footer />
    </section>
  );
};
