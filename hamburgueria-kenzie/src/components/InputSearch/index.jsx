import { StyledHeader } from "./styles";

export const InputSearch = ({ type, placeholder, onChange }) => {
  return (
    <StyledHeader
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      required
    />
  );
};
