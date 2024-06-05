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

  const { login } = useAuth();

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
            onSubmit={formik.handleSubmit}
            className="dl-flex dl-flex-col dl-gap-6"
          >
            {/* <DlSelect
              onChange={handleSelectChange}
              value="dni"
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
    </>
  );
};

export default LoginComponent;
