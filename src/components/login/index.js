"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { DlButton, DlSelect, DlInput } from "@alicorpdigital/dali-react";
import { useFormik } from "formik";
import { initialValues } from "./loginform.form";

import { useRouter } from "next/navigation";
import { Auth } from "@/api";
import * as Yup from "yup";

const authCtrl = new Auth();

const LoginComponent = () => {
  const router = useRouter();
  const [validationSchema, setValidationSchema] = useState(
    Yup.object({
      identifier: Yup.string()
        .required("Este campo es requerido")
        .length(8, `El identificador debe tener exactamente 8 dígitos`)
        .matches(/^[0-9]+$/, "El identificador solo puede contener números"),
      password: Yup.string().required("Este campo es requerido"),
    })
  );

  const formik = useFormik({
    initialValues: initialValues({
      identifier: "",
      documentType: "dni",
      password: "",
    }),
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnMount: false,
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

  useEffect(() => {
    const identifierLength = formik.values.documentType === "ce" ? 7 : 8;

    console.log("identifierLength", identifierLength);

    setValidationSchema(
      Yup.object({
        identifier: Yup.string()
          .required("Este campo es requerido")
          .length(
            identifierLength,
            `El identificador debe tener exactamente ${identifierLength} dígitos`
          )
          .matches(/^[0-9]+$/, "El identificador solo puede contener números"),
        password: Yup.string().required("Este campo es requerido"),
      })
    );

    if (formik.touched.identifier) {
      formik.setFieldTouched("identifier", false);
      formik.validateForm();
    }
  }, [formik.values.documentType, formik.touched.identifier]);

  useEffect(() => {
    // Reset del formulario
    formik.resetForm({
      values: {
        ...formik.values,
        identifier: "", // resetea el documento
        password: "", // resetea el password
      },
    });
  }, [formik.values.documentType]);

  return (
    <div className="dl-flex dl-flex-col lg:dl-grid lg:dl-grid-cols-6 dl-h-screen">
      <div className="dl-relative lg:dl-col-span-4 dl-h-40 lg:dl-h-screen">
        <div className="dl-flex lg:dl-hidden">
          <Image
            alt="banner"
            fill
            objectFit="cover"
            sizes="100vw"
            src="/login/banner-mobile.png"
          />
        </div>
        <div className="dl-hidden lg:dl-block">
          <Image
            alt="banner"
            fill
            sizes="100vw"
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
        <div className="dl-w-full dl-max-w-xl">
          <Image
            className="dl-mb-6"
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
            <DlSelect
              name="documentType"
              id="documentType"
              value={formik.values.documentType}
              onChange={formik.handleChange}
              size="lg"
              items={[
                { value: "dni", label: "DNI" },
                { value: "ce", label: "CE" },
              ]}
            ></DlSelect>
            <DlInput
              name="identifier"
              id="identifier"
              maxLength={formik.values.documentType === "dni" ? 8 : 7}
              value={formik.values.identifier}
              onChange={formik.handleChange}
              status={formik.errors.identifier ? "error" : "default"}
              placeholder={`Número de ${formik.values.documentType.toUpperCase()}`}
              helperText={formik.errors.identifier}
              size="lg"
            />
            <DlInput
              type="password"
              name="password"
              id="password"
              maxLength={10}
              placeholder="Contraseña"
              value={formik.values.password}
              onChange={formik.handleChange}
              status={formik.errors.password ? "error" : "default"}
              helperText={formik.errors.password}
              size="lg"
            />
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
