import styled from "styled-components";
import { dimensions } from "../utils/dimensions";
import { shadow } from "../utils/shadow";
import { color } from "../utils/color";

export const Card = styled.div`
  width: 100%;
  border-radius: 4px;
  height: ${dimensions.card.height};
  box-shadow: ${shadow.card};
  display: grid;
  grid-template-rows:
    calc((${dimensions.card.height} * 25) / 100) calc(
      (${dimensions.card.height} * 60) / 100
    )
    calc((${dimensions.card.height} * 15) / 100);
  overflow: hidden;
  position: relative;
`;

export const CardHeader = styled.div`
  width: 100%;
  height: calc((${dimensions.card.height} * 25) / 100);
  background: ${color.bgWhite};
`;
export const CardBody = styled.div`
  width: 100%;
  height: calc((${dimensions.card.height} * 60) / 100);
  background: ${color.bgGrey};
`;

export const CardFooter = styled.div`
  width: 100%;
  height: calc((${dimensions.card.height} * 15) / 100);
  background: ${color.bgWhite};
  display: flex;
  justify-content: flex-end;
  align-items: center;
`;

export const CardImg = styled.img<{ contain?: true; cover?: true }>`
  width: 100%;
  height: 100%;
  object-fit: ${(props) =>
    props.contain ? "contain" : props.cover ? "cover" : ""};
  object-position: center center;
`;

export const Option = styled.div<{ delete?: true }>`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${(props) =>
    props.delete ? color.bgLightRed : color.bgLightBlue}; // crimson
  color: ${(props) => (props.delete ? color.redColor : color.blueColor)};
  margin-right: 0.2rem;
`;
