import React from "react";
import styled from "styled-components";
import { color } from "../utils/color";
import { shadow } from "../utils/shadow";
import { Link, useLocation } from "react-router-dom";
import { dimensions } from "../utils/dimensions";

const Navigation = () => {
  const location = useLocation();
  const isLocation = (url: string): boolean => {
    return location.pathname === url ? true : false;
  };
  return (
    <NavigationContainer>
      <Logo>LOGO</Logo>
      <LinkGroup>
        <LinkItem to={"/"} is-selected={isLocation("/")}>
          Acceuil
        </LinkItem>
        <LinkItem to={"/flexible"} is-selected={isLocation("/flexible")}>
          Flexibles
        </LinkItem>
      </LinkGroup>
    </NavigationContainer>
  );
};

const NavigationContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: ${dimensions.sidebar};
  height: 100vh;
  background: ${color.bgWhite};
  box-shadow: ${shadow.light};
  display: flex;
  flex-direction: column;
  row-gap: 1rem;
  padding-block: 1rem;
`;

const Logo = styled.div`
  width: ${dimensions.sidebar};
  height: 50px;
  display: flex;
  align-items: center;
  font-weight: 800;
  font-size: 2rem;
  padding-inline: 2rem;
`;

const LinkGroup = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 0.2rem;
`;

const LinkItem = styled(Link)<{ "is-selected": boolean }>`
  background: ${(props) => (props["is-selected"] ? color.bgLightBlue : "")};
  color: ${color.blueColor};
  height: 40px;
  line-height: 40px;
  padding-inline: 2rem;
  transition: linear 0.4s;

  &:hover {
    text-decoration: none;
    background: ${color.hoverGreyColor};
  }
`;

export default Navigation;
