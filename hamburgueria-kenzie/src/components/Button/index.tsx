import { StyledButton } from "./styles";

interface iButton{
  type: "button" | "submit" | "reset" 
  name: string 
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const Button = ({type, name, onClick}: iButton) => {
    return (
      <StyledButton type={type} onClick={onClick}>{name}</StyledButton>
    );
  };
  