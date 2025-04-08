import { Route, Routes } from "react-router";
import { Home } from "../Pages/Home";
import { CompanyInfo } from "../Pages/CompanyInfo";

export const AppRouter = () => {
  return (
    <>
      <Routes>
        <Route path="/*" element={<Home />} />
        <Route path="/nosotros" element={<CompanyInfo />} />
      </Routes>
    </>
  );
};
