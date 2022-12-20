import { StyledInput } from "./styles";
import { UseFormRegisterReturn } from "react-hook-form";

interface iInput {
  id: string;
  type: string;
  placeholder: string;
  textLabel: string;
  register: UseFormRegisterReturn;
}

export const Input = ({
  id,
  type,
  placeholder,
  textLabel,
  register,
}: iInput) => {
  return (
    <StyledInput>
      <label htmlFor={id}>{textLabel}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} />
    </StyledInput>
  );
};
