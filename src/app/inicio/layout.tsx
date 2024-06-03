"use client";

import HeaderComponent from "@/components/header";

const Layout = ({ children }: any) => {
  return (
    <>
      <HeaderComponent />
      {children}
    </>
  );
};

export default Layout;
