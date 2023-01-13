import styled from "styled-components";
import { color } from "../utils/color";
import { dimensions } from "../utils/dimensions";
import { shadow } from "../utils/shadow";
export const Input = styled.input<{
  width?: "small" | "medium" | "large";
  isSearch?: true;
}>`
  width: 100%;
  height: 30px;
  border-radius: 3px;
  border: 1px solid ${color.bgInput};
  padding-left: ${(props) => (props.isSearch ? "40px" : 0)};
  color: ${color.textColor};
  max-width: ${(props) =>
    props.width === "small"
      ? dimensions.input.small
      : props.width === "medium"
      ? dimensions.input.medium
      : props.width === "large"
      ? dimensions.input.large
      : "200px"};
  background: ${color.bgInput};
  box-shadow: ${shadow.input};
  &:focus {
    outline: 2px solid ${color.bgLightBlue};
  }
  &::placeholder {
    color: ${color.textColor};
  }
`;
