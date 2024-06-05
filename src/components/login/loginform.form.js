import * as Yup from "yup";

export function initialValues() {
  return {
    identifier: "",
    password: "",
    documentType: "dni",
  };
}

export function validationSchema(values) {
  const identifierLength = values?.documentType === "ce" ? 7 : 8;

  console.log("identifierLength", identifierLength);

  return Yup.object({
    identifier: Yup.string()
      .required("Este campo es requerido")
      .length(
        identifierLength,
        `El identificador debe tener exactamente ${identifierLength} dígitos`
      )
      .matches(/^[0-9]+$/, "El identificador solo puede contener números"),
    password: Yup.string().required("Este campo es requerido"),
  });
}
