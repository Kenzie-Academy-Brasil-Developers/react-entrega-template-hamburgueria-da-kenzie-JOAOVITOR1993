import { yupResolver } from "@hookform/resolvers/yup";
import { useContext } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { Button } from "../../components/Button";
import { Input } from "../../components/Input";
import { UserContext } from "../../contexts/UserContext";
import { registerSchema } from "./registerSchema";
import { StyledDivRegister, StyledRegister } from "./styles";
import imgLogin from "../../img/imgLogin.png"
import imgLoginMobile from "../../img/imgLoginMobile.png"

interface iRegisterForm {
  name: string;
  email: string;
  password: string;
  passwordConfirm: string;
}

export const Register = () => {
  const { onSubmitFormRegister, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iRegisterForm>({
    mode: "onChange",
    resolver: yupResolver(registerSchema),
  });

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <StyledDivRegister className="container">
      <figure className="imgLogin"><img src={imgLogin} alt="" /></figure>
      <figure className="imgLoginMobile"><img src={imgLoginMobile} alt="" /></figure>
      <StyledRegister noValidate onSubmit={handleSubmit(onSubmitFormRegister)}>
        <div>
          <h1>Cadastro</h1>
          <Link to={"/login"}>Retornar para o login</Link>
        </div>
        <Input
          id={"name"}
          type={"text"}
          placeholder={"Digite aqui seu nome"}
          textLabel={"Nome"}
          register={register("name")}
        />
        {errors.name && <p className="pError">{errors.name.message}</p>}

        <Input
          id={"email"}
          type={"email"}
          placeholder={"Digite aqui o email"}
          textLabel={"Email"}
          register={register("email")}
        />
        {errors.email && <p className="pError">{errors.email.message}</p>}

        <Input
          id={"password"}
          type={"password"}
          placeholder={"Digite a senha"}
          textLabel={"Senha"}
          register={register("password")}
        />
        {errors.password && <p className="pError">{errors.password.message}</p>}

        <Input
          id={"passwordConfirm"}
          type={"password"}
          placeholder={"Digite novamente a senha"}
          textLabel={"Confirmar senha"}
          register={register("passwordConfirm")}
        />
        {errors.passwordConfirm && (
          <p className="pError">{errors.passwordConfirm.message}</p>
        )}

        <Button type={"submit"} name={"Cadastrar"} />
      </StyledRegister>
    </StyledDivRegister>
  );
};
