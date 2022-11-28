import { StyledButton } from "./style";

export const Button = ({type, name, onClick}) => {
    return (
      <StyledButton type={type} onClick={onClick}>{name}</StyledButton>
    );
  };
  