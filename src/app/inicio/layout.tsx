"use client";

import HeaderComponent from "@/components/header";
import { DlSidebar } from "@alicorpdigital/dali-react";
import { useEffect } from "react";
import { useAuth } from "@/hooks/useAuth";

const Layout = ({ children }: any) => {
  const { isSeller } = useAuth();

  return (
    <>
      <HeaderComponent />
      <div
        className={!isSeller ? "dl-grid lg:dl-grid-cols-12 xl:dl-gap-12" : ""}
      >
        {!isSeller && (
          <div className="dl-hidden lg:dl-grid lg:dl-col-span-3">
            <DlSidebar
              open
              label="Supervisor"
              titleLabel="Paulo Tejada"
              items={[
                {
                  key: "resources",
                  label: "Recursos",
                },
              ]}
            />
          </div>
        )}

        <div className={!isSeller ? "dl-col-span-10 lg:dl-col-span-9" : ""}>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
