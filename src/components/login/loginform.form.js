import * as Yup from "yup";

export function initialValues() {
  return {
    identifier: "",
    password: "",
  };
}

export function validationSchema() {
  return Yup.object({
    identifier: Yup.string()
      .required(true)
      .length(8, "El identificador debe tener exactamente 8 dígitos")
      .matches(/^[0-9]+$/, "El identificador solo puede contener números"),
    password: Yup.string().required(true),
  });
}
