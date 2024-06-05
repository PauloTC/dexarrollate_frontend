"use client";
import Image from "next/image";
import { useState } from "react";
import { DlButton, DlSelect, DlInput } from "@alicorpdigital/dali-react";

import { useRouter } from "next/navigation";

const LoginComponent = () => {
  const router = useRouter();
  const [documentType, setDocumentType] = useState("dni");

  const handleSubmit = (event: any) => {
    event.preventDefault();
    router.push("/inicio");
  };

  const handleSelectChange = (event: any) => {
    setDocumentType(event.target.value);
  };

  return (
    <div className='dl-flex dl-flex-col lg:dl-grid lg:dl-grid-cols-6 dl-h-screen'>
      <div className="dl-relative lg:dl-col-span-4 dl-h-40 lg:dl-h-screen">
        <div className='dl-flex lg:dl-hidden'>
          <Image
            alt="banner"
            fill
            objectFit='cover'
            sizes='100vw'
            src="/login/banner-mobile.png"
          />
        </div>
        <div className='dl-hidden lg:dl-block'>
          <Image
            alt="banner"
            fill
            sizes='100vw'
            src="/login/banner-desktop.jpg"
          />
        </div>
      </div>
      <div
        className="
          dl-py-8
          dl-px-4
          lg:dl-col-span-2
          lg:dl-px-20
          lg:dl-flex
          dl-flex-col
          dl-items-center
          dl-justify-around
        "
      >
        <div className='dl-w-full dl-max-w-xl'>
          <Image
            className="mb-6"
            alt="logo"
            width={168}
            height={20}
            src="/login/logo.svg"
          />
          <h3 className="dl-text-2xl dl-font-semibold dl-mb-6">Bienvenido</h3>
          <form
            onSubmit={handleSubmit}
            className="dl-flex dl-flex-col dl-gap-6"
          >
            <DlSelect
              onChange={handleSelectChange}
              value="dni"
              size='lg'
              items={[
                { value: "dni", label: "DNI" },
                { value: "ce", label: "CE" },
              ]}
            ></DlSelect>
            <DlInput
              maxLength={documentType === "dni" ? 8 : 7}
              required
              placeholder={`Número de ${documentType.toUpperCase()}`}
              size='lg'
            />
            <DlInput required type="password" placeholder="Contraseña" size='lg' />
            <DlButton type="submit" className="dl-mb-6" block size='lg'>
              Ingresar
            </DlButton>
          </form>
          <p className="dl-text-sm dl-text-center">
            Si no puedes ingresar, envíanos un correo a
            <strong className="dl-font-bold"> contacto@alicorp.com</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginComponent;
