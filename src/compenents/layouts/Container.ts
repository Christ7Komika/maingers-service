import styled from "styled-components";
import { color } from "../utils/color";
import { dimensions } from "../utils/dimensions";
export const Container = styled.div`
  width: 100vw;
  height: auto;
  display: grid;
  grid-template-columns: ${dimensions.sidebar} 1fr;
  background: ${color.bgLight};
`;

export const Aside = styled.div`
  width: ${dimensions.sidebar};
  height: 100vh;
  position: relative;
`;

export const Main = styled.main`
  width: 100%;
  display: flex;
  justify-content: center;
`;

export const Stack = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-direction: column;
  row-gap: 2rem;
  padding-block: 2rem;
`;

export const GridCard = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1rem;
`;

export const StackRow = styled.div<{
  posX?: "center" | "flex-end" | "flex-start" | "space-between";
  posY?: "center" | "flex-end" | "flex-start" | "space-between";
}>`
  display: flex;
  justify-content: ${(props) => (props.posX ? props.posX : "flex-start")};
  align-items: ${(props) => (props.posY ? props.posY : "flex-start")};
  width: 100%;
`;
