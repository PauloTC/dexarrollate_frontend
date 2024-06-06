"use client";

import HeaderComponent from "@/components/header";
import { DlSidebar } from '@alicorpdigital/dali-react';

const Layout = ({ children }: any) => {
  return (
    <>
      <HeaderComponent />
      <div className='dl-grid lg:dl-grid-cols-12 xl:dl-gap-12'>
        <div className='dl-hidden lg:dl-grid lg:dl-col-span-3'>
        <DlSidebar
          open
          label='Supervisor'
          titleLabel='Paulo Tejada'
          items={[
            {
              key: 'resources',
              label: 'Recursos'
            }
          ]}
        />
        </div>
        <div className='dl-col-span-10 lg:dl-col-span-9'>
          {children}
        </div>
      </div>
    </>
  );
};

export default Layout;
