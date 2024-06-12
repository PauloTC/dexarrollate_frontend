"use client";
import HeaderComponent from "@/components/header";
import FooterComponent from "@/components/footer";
import { DlIcon, DlSidebar } from "@alicorpdigital/dali-react";
import { useMediaQuery } from "@uidotdev/usehooks";
import { useAuth } from "@/hooks/useAuth";
import { useState } from "react";
import Image from "next/image";
import { UserType } from "@/utils/enums/user";

const Layout = ({ children }: any) => {
  const { logout, position } = useAuth();
  const [open, setOpen] = useState<boolean>(false);
  const isLargeDevice = useMediaQuery("only screen and (min-width: 1024px)");

  return (
    <>
      <HeaderComponent onHamburger={() => setOpen(true)} />
      <div className="dl-flex lg:dl-gap-12">
        {position !== UserType.Seller && (
          <div
            style={{
              height: "calc(100vh - 72px)",
              boxShadow:
                "0px 0px 4px 0px rgba(108, 108, 108, 0.08), 0px 8px 16px -4px rgba(108, 108, 108, 0.16)",
            }}
            className="
              lg:dl-flex
              lg:dl-w-full
              lg:dl-max-w-72
              lg:dl-h-screen
              lg:dl-sticky
              lg:dl-top-[72px]
            "
          >
            <DlSidebar
              open={open}
              backdrop={open}
              className="dl-max-w-72 lg:dl-flex lg:dl-static"
              fixed
              onClose={() => setOpen(false)}
              closeable={!isLargeDevice}
              title={
                !isLargeDevice && (
                  <Image
                    alt="dexarrollate"
                    src="/dexarrollate.svg"
                    width={128}
                    height={16}
                  />
                )
              }
              label="Supervisor"
              titleLabel="Paulo Tejada"
              items={[
                {
                  key: "resources",
                  label: "Recursos",
                },
              ]}
              itemsFooter={[
                {
                  icon: <DlIcon name="sign-out" />,
                  key: "cerrar-sesion",
                  label: "Cerrar sesión",
                  onClick: logout,
                },
              ]}
            />
          </div>
        )}

        <div className="dl-w-full">{children}</div>
      </div>
      <FooterComponent />
    </>
  );
};

export default Layout;
