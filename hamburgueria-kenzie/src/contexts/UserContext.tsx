import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { CartContext } from "./CartContext";

interface iUserContextProps {
  children: React.ReactNode;
}

interface iUserContext {
  onSubmitFormRegister: (data: iData) => Promise<void>;
  onSubmitFormLogin: (data: iData) => Promise<void>;
  userLogin: boolean;
  loading: boolean;
}

interface iData {
  name?: string;
  email: string;
  password: string;
  passwordConfirm?: string;
}

export const UserContext = createContext({} as iUserContext);

export const UserProvider = ({ children }: iUserContextProps) => {
  const navigate = useNavigate();
  const [userLogin, setUserLogin] = useState(false);
  const [loading, setLoading] = useState(true);

  const onSubmitFormRegister = async (data: iData) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso!");
      navigate("/login");
    } catch (error) {
      console.log(error);
      toast.error("Ops! Algo deu errado");
    }
  };

  const onSubmitFormLogin = async (data: iData) => {
    try {
      const response = await api.post("/login", data);
      const { accessToken } = response.data;
      setUserLogin(true);
      localStorage.setItem("@TOKEN", accessToken);
      toast.success("Login efetuado com sucesso!");
      navigate("/home");
    } catch (error) {
      console.log(error);
      toast.error("Email ou senha incorretos!");
    }
  };

  useEffect(() => {
    const autoLogin = async () => {
      const token = localStorage.getItem("@TOKEN");

      if (!token) {
        setLoading(false);
        return null;
      }
      try {
        const response = await api.get("/products", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUserLogin(true);
        navigate("/home");
      } catch (error) {
        console.log(error);
        localStorage.clear();
      } finally {
        setLoading(false);
      }
    };
    autoLogin();
  }, []);

  return (
    <UserContext.Provider
      value={{
        onSubmitFormRegister,
        onSubmitFormLogin,
        userLogin,
        loading,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
