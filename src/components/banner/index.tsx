import React from 'react';

const Banner = () => {
  return (
    <div
      className='
        dl-hidden
        dl-bg-[url("/home/banner-home.jpg")]
        dl-bg-cover
        dl-bg-bottom
        lg:dl-flex
        dl-flex-col
        dl-text-center
        dl-items-center
        dl-justify-center
        dl-min-h-64
        dl-text-[#A30000]
      '
    >
      <h2 className='dl-text-3xl dl-font-bold'>¡Hola!</h2>
      <p className='dl-text-lg'>
        Aquí inicia tu aventura de <br /> <b>aprendizaje</b>
      </p>
    </div>
  )
};

export default Banner;