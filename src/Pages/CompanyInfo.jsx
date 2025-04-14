import React from "react";
import { LayoutApp } from "../Layouts/LayoutApp";
import { TitleDescriptionCInfo } from "../Components/TitleDescriptionCInfo";
import { Mision } from "../Components/Mision";
import { Vision } from "../Components/Vision";

export const CompanyInfo = () => {
  return (
    <LayoutApp>
      <section className="min-h-screen">
        <div className="max-w-[1440px] mx-auto">
          <div className="mb-10">
            <TitleDescriptionCInfo />
          </div>
          <div className="space-y-10 pb-10">
            <div>
              <Mision />
            </div>
            <div>
              <Vision />
            </div>
          </div>
        </div>
      </section>
    </LayoutApp>
  );
};
