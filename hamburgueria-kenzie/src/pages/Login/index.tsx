import { useForm } from "react-hook-form";
import { Input } from "../../components/Input";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./loginSchema";
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import { StyledDivLogin, StyledLogin } from "./styles";
import imgLogin from "../../img/imgLogin.png";
import imgLoginMobile from "../../img/imgLoginMobile.png";

interface iLoginForm {
  email: string;
  password: string;
}

export const Login = () => {
  const { onSubmitFormLogin, loading } = useContext(UserContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<iLoginForm>({
    mode: "onChange",
    resolver: yupResolver(loginSchema),
  });

  if (loading) {
    return <h1>Carregando...</h1>;
  }

  return (
    <StyledDivLogin className="container">
      <StyledLogin noValidate onSubmit={handleSubmit(onSubmitFormLogin)}>
        <h1>Login</h1>
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
          placeholder={"Digite aqui a senha"}
          textLabel={"Senha"}
          register={register("password")}
        />
        {errors.password && <p className="pError">{errors.password.message}</p>}

        <Button type={"submit"} name={"Logar"} />
        <p className="pLogin">
          Crie sua conta para saborear muitas delícias e matar sua fome!
        </p>
        <Link to={"/register"}>Cadastrar</Link>
      </StyledLogin>
      <figure className="imgLogin">
        <img src={imgLogin} alt="" />
      </figure>
      <figure className="imgLoginMobile">
        <img src={imgLoginMobile} alt="" />
      </figure>
    </StyledDivLogin>
  );
};
