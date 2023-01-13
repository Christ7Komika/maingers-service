import React from "react";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardImg,
  Option,
} from "./Card";
import styled from "styled-components";
import EditIcon from "@atlaskit/icon/glyph/edit";
import CrossIcon from "@atlaskit/icon/glyph/cross";
import Img from "../../assets/flexibleImg.png";
import { FLEXIBLE } from "../../api/flexibleRequest";

type Props = {
  flexible: FLEXIBLE;
};

const CardFlexible = ({ flexible }: Props) => {
  return (
    <Card>
      <CardHeader>
        <FlexibleHead>
          <p style={{ fontWeight: 600 }}>{flexible.name}</p>
          <Color color="red" />
        </FlexibleHead>
      </CardHeader>
      <CardBody>
        <CardImg src={Img} contain />
      </CardBody>
      <CardFooter>
        <Option>
          <EditIcon label="edit" size="small" />
        </Option>
        <Option delete>
          <CrossIcon label="delete" size="small" />
        </Option>
      </CardFooter>
    </Card>
  );
};

const FlexibleHead = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr;
  column-gap: 0.2rem;
  justify-content: space-between;
  align-items: center;
  padding: 0.2rem 10px;
`;

const Color = styled.div<{ color: string }>`
  width: 10px;
  height: 10px;
  border-radius: 10px;
  background: ${(props) => props.color};
  position: absolute;
  top: 5px;
  right: 5px;
`;

export default CardFlexible;
