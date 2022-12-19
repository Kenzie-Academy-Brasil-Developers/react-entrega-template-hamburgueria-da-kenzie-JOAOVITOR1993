import * as yup from "yup";

export const registerSchema = yup.object().shape({
  name: yup
  .string()
  .required("Nome obrigatório"),
  email: yup
  .string()
  .required("Email obrigatório")
  .email("E-mail inválido"),
  password: yup
  .string()
  .required("Senha obrigatória"),
  passwordConfirm: yup
  .string()
  .required("A confirmação de senha é obrigatória")
  .oneOf([yup.ref("password")], "Senha incorreta"),
});
