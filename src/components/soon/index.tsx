import Image from 'next/image';
import React from 'react';

const Soon = () => {
  return (
    <div
      className='
        dl-bg-neutral-light
        dl-py-36
        dl-flex
        dl-flex-col
        dl-items-center
        dl-justify-center
        dl-text-center
        dl-gap-2
        dl-opacity-50
        lg:dl-flex-row
        lg:dl-gap-4
      '
    >
      <div className='dl-relative dl-w-full dl-max-w-72 dl-h-40'>
        <Image
          src='/home/soon-desktop.svg'
          alt='soon'
          fill
          sizes="100vw"
        />
      </div>
      <div>
        <h4 className='dl-subtitle-xs'>Próximamente</h4>
        <p className='dl-comp-text-xs'>Tu espacio de aprendizaje </p>
      </div>
    </div>
  );
};

export default Soon;
