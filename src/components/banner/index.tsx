import React from 'react';

const Banner = () => {
  return (
    <div
      className='
        dl-hidden
        dl-bg-[url("/home/banner-home.jpg")]
        dl-bg-cover
        dl-bg-center
        lg:dl-flex
        dl-flex-col
        dl-text-center
        dl-items-center
        dl-justify-center
        dl-min-h-72
        dl-text-primary-dark
      '
    >
      <h2 className='dl-text-3xl dl-font-bold'>¡Hola!</h2>
      <p className='dl-text-lg dl-max-w-xs'>
        Estas son herramientas que necesitarás durante tu aventura de aprendizaje.
      </p>
    </div>
  )
};

export default Banner;