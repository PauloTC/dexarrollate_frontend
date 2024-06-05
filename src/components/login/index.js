"use client";
import Image from "next/image";
import { useState } from "react";
import { DlButton, DlSelect, DlInput } from "@alicorpdigital/dali-react";
import { useFormik } from "formik";
import { initialValues, validationSchema } from "./loginform.form";

import { useRouter } from "next/navigation";
import { Auth } from "@/api";
import { useAuth } from "@/hooks/useAuth";

const authCtrl = new Auth();

const LoginComponent = () => {
  const router = useRouter();
  const [documentType, setDocumentType] = useState("dni");

  // const handleSubmit = (event: any) => {
  //   event.preventDefault();
  //   router.push("/inicio");
  // };

  const handleSelectChange = (event) => {
    setDocumentType(event.target.value);
  };

  const formik = useFormik({
    initialValues: initialValues(),
    validationSchema: validationSchema(),
    validateOnChange: false,
    onSubmit: async (values) => {
      try {
        const response = await authCtrl.login(values);

        login(response.jwt);

        router.push("/inicio");
      } catch (error) {
        console.error(error);
      }
    },
  });

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
            onSubmit={formik.handleSubmit}
            className="dl-flex dl-flex-col dl-gap-6"
          >
            {/* <DlSelect
              onChange={handleSelectChange}
              value="dni"
              size='lg'
              items={[
                { value: "dni", label: "DNI" },
                { value: "ce", label: "CE" },
              ]}
            ></DlSelect> */}
            <input
              name="identifier"
              id="identifier"
              placeholder="name@company.com"
              value={formik.values.identifier}
              onChange={formik.handleChange}
              error={formik.errors.identifier}
            ></input>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="*****"
              value={formik.values.password}
              onChange={formik.handleChange}
            ></input>
            {/* <DlInput
              maxLength={documentType === "dni" ? 8 : 7}
              required
              placeholder={`Número de ${documentType.toUpperCase()}`}
              size='lg'
            />
            <DlInput required type="password" placeholder="Contraseña" /> */}
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
    </div>
  );
};

export default LoginComponent;
