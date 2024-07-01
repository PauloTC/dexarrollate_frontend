"use client";
import { useAuth } from '@/hooks/useAuth';
import { UserType } from '@/utils/enums/user';
import { DlIcon, DlTextButton } from "@alicorpdigital/dali-react";
import Image from "next/image";
import cn from "classnames";
import { useMediaQuery } from '@/hooks/useMediaQuery';

type Props = {
  onHamburger?: () => void;
}

const HeaderComponent = (props: Props) => {
  const { onHamburger } = props;
  const { position, logout } = useAuth();
  const isLargeDevice = useMediaQuery("only screen and (min-width: 1024px)");

  return (
    <div
      className={cn(`
        dl-z-50
        dl-sticky
        dl-top-0
        dl-p-4
        dl-flex
        dl-items-center
        dl-justify-between
        dl-h-16
        dl-border-b
        dl-border-bottom-color-neutral-dark
        lg:dl-h-18
        lg:dl-px-8
      `, {
        'dl-bg-white': position === UserType.Seller,
        'dl-bg-highlight-dark': position !== UserType.Seller
      })}
    >
      <div className='dl-flex'>
        {position !== UserType.Seller &&
          <DlIcon
            className="dl-text-neutral-lightest lg:dl-hidden"
            size="md"
            name="hamburger"
            onClick={onHamburger}
          />
        }
      </div>
      <div
        className={`
          dl-absolute
          dl-flex
          dl-gap-4
          ${UserType.Seller !== position && `
            dl-left-2/4
            dl--translate-x-1/2
            lg:dl--translate-x-0
            lg:dl-left-8
          `}
        `}
      >
        <Image
          alt="logo"
          width={168}
          height={20}
          src={UserType.Seller === position ? '/dexarrollate.svg' : '/dexarrollate-white.svg'}
        />
        {isLargeDevice &&
          <div className='dl-border-l dl-pl-4 dl-text-white dl-text-2xl dl-font-semibold dl-italic'>
            Supervisor
          </div>
        }
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
