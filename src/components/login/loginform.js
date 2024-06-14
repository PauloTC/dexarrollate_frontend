"use client";
import { useFormik } from "formik";
import * as Yup from "yup";
import { DlButton, DlSelect, DlInput } from "@alicorpdigital/dali-react";
import { useRouter } from "next/navigation";
import { Auth } from "@/api";
import { useEffect, useState } from "react";
import { useAuth } from "@/hooks";

const authCtrl = new Auth();

const LoginForm = () => {
  const router = useRouter();
  const { login } = useAuth();
  const [loading, setLoading] = useState(false);
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
    initialValues: {
      identifier: "",
      documentType: "dni",
      password: "",
    },
    validationSchema: validationSchema,
    validateOnChange: false,
    validateOnMount: false,
    onSubmit: async (values) => {
      setLoading(true);
      try {
        const response = await authCtrl.login(values);

        login(response.jwt);

        router.push("/inicio");
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    },
  });

  useEffect(() => {
    const identifierLength = formik.values.documentType === "ce" ? 7 : 8;

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
        status={formik.errors.identifier ? "error" : undefined}
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
        status={formik.errors.password ? "error" : undefined}
        helperText={formik.errors.password}
        size="lg"
      />
      <DlButton
        type="submit"
        className="dl-mb-6"
        variant='highlight'
        size='lg'
        block
        loading={loading}
      >
        Ingresar
      </DlButton>
    </form>
  );
};

export default LoginForm;
