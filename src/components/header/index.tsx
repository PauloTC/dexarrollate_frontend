"use client";
import { DlIcon } from "@alicorpdigital/dali-react";
import Image from "next/image";

const HeaderComponent = () => {
  return (
    <div
      style={{ borderBottom: "1px solid #6c6c6c" }}
      className="dl-p-4 dl-flex dl-items-center dl-justify-between"
    >
      <Image alt="logo" width={168} height={20} src="/login/logo.svg" />
      <DlIcon
        className="dl-text-al-primary-medium"
        size="lg"
        name="hamburger"
      />
    </div>
  );
};

export default HeaderComponent;
