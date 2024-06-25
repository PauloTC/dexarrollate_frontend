import React from 'react';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='dl-bg-neutral-darkest dl-pt-12 dl-pb-6 lg:dl-pt-16 lg:dl-pb-8'>
      <div className='dl-container dl-text-white'>
        <div className='dl-mb-8 lg:dl-flex lg:dl-items-center lg:dl-justify-between'>
          <Image
            alt='dexarrollate'
            src='/dexarrollate-white.svg'
            width={185}
            height={23}
          />
          <p className='dl-mt-12 lg:dl-mt-0 lg:dl-max-w-lg dl-font-medium dl-text-lg'>
            Si tienes alguna duda o consulta envíenos un correo a: contacto@alicorp.com
          </p>
        </div>
        <div className='dl-pt-6 dl-border-t dl-font-medium dl-text-lg dl-border-t-neutral-dark lg:dl-text-center'>
          Copyright © 2024 | Todos los derechos reservados
        </div>
      </div>
    </div>
  );
};

export default Footer;