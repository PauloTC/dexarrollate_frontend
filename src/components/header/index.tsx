"use client";
import { DlIcon } from "@alicorpdigital/dali-react";
import Image from "next/image";

type Props = {
  onHamburger?: () => void;
}

const HeaderComponent = (props: Props) => {
  const { onHamburger } = props;

  return (
    <div
      className='
        dl-z-50
        dl-sticky
        dl-top-0
        dl-bg-white
        dl-p-4
        dl-flex
        dl-items-center
        dl-justify-between
        dl-h-16
        dl-border
        dl-border-bottom-color-neutral-dark
        lg:dl-h-[72px]
        lg:dl-px-8
      '
    >
      <DlIcon
        className="dl-text-al-primary-medium lg:dl-hidden"
        size="md"
        name="hamburger"
        onClick={onHamburger}
      />
      <div
        className='
          dl-absolute
          dl-left-2/4
          dl--translate-x-1/2
          lg:dl-static
          lg:dl--translate-x-0
        '
      >
        <Image alt="logo" width={168} height={20} src="/login/logo.svg" />
      </div>
    </div>
  );
};

export default HeaderComponent;
