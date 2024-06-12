"use client";
import { useAuth } from '@/hooks/useAuth';
import { UserType } from '@/utils/enums/user';
import { DlIcon, DlTextButton } from "@alicorpdigital/dali-react";
import Image from "next/image";

type Props = {
  onHamburger?: () => void;
}

const HeaderComponent = (props: Props) => {
  const { position, logout } = useAuth();
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
      <div>
        {position !== UserType.Seller &&
          <DlIcon
            className="dl-text-al-primary-medium lg:dl-hidden"
            size="md"
            name="hamburger"
            onClick={onHamburger}
          />
        }
      </div>
      <div
        className={`
          dl-absolute
          ${UserType.Seller !== position && `
            dl-left-2/4
            dl--translate-x-1/2
            lg:dl--translate-x-0
            lg:dl-left-8
          `}
        `}
      >
        <Image alt="logo" width={168} height={20} src="/login/logo.svg" />
      </div>

      {position === UserType.Seller &&
        <DlTextButton icon='sign-out' onClick={logout} className='dl-gap-1'>
          Cerrar sesión
        </DlTextButton>
      }
    </div>
  );
};

export default HeaderComponent;
