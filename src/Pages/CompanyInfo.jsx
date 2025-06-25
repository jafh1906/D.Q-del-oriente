  import React from "react";
  import { LayoutApp } from "../Layouts/LayoutApp";
  import { TitleDescriptionCInfo } from "../Components/TitleDescriptionCInfo";

  export const CompanyInfo = () => {
    return (
      <LayoutApp>
        <section className="min-h-screen">
          <div className="max-w-[1440px] mx-auto">
            <div className="mb-10">
              <TitleDescriptionCInfo />
            </div>
          </div>
        </section>
      </LayoutApp>
    );
  };
