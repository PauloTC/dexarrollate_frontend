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
    <>
      <div>
        <div className="flex sm:dl-hidden">
          <Image
            priority
            alt="banner"
            layout="responsive"
            width={1200}
            height={800}
            src="/login/banner_mobile.png"
          />
        </div>
        <div className="px-4 dl-py-8">
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
              items={[
                { value: "dni", label: "DNI" },
                { value: "ce", label: "CE" },
              ]}
            ></DlSelect>
            <DlInput
              maxLength={documentType === "dni" ? 8 : 7}
              required
              placeholder={`Número de ${documentType.toUpperCase()}`}
            />
            <DlInput required type="password" placeholder="Contraseña" />
            <DlButton type="submit" className="dl-mb-6" block={true}>
              Ingresar
            </DlButton>
          </form>
          <p className="dl-text-sm dl-text-center">
            Si no puedes ingresar, envíanos un correo a
            <strong className="dl-font-bold"> contacto@alicorp.com</strong>
          </p>
        </div>
      </div>
    </>
  );
};

export default LoginComponent;
