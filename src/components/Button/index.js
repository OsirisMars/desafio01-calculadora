import { ButtonContainer } from "./styles";

function Button({label, onClick}) {
    return (
      <ButtonContainer onClick={onClick} type="Button">
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button;
  