import React from "react";
import { StackRow } from "../layouts/Container";
import SearchBar from "../form/SearchBar";
import Profile from "../profiles/Profile";
import styled from "styled-components";

const Header = () => {
  return (
    <HeaderContainer posX="space-between" posY="center">
      <SearchBar width="medium" />
      <Profile />
    </HeaderContainer>
  );
};

const HeaderContainer = styled(StackRow)`
  height: 50px;
`;

export default Header;
