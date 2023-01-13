import React from "react";
import { Input } from "./Input";
import styled from "styled-components";
import SearchIcon from "@atlaskit/icon/glyph/search";

type Props = {
  width: "small" | "medium" | "large";
};

const SearchBar = ({ width }: Props) => {
  return (
    <Search>
      <Icon>
        <SearchIcon label="search-bar" />
      </Icon>
      <Input width={width} isSearch placeholder="Recherche" />
    </Search>
  );
};

const Search = styled.div`
  width: fit-content;
  height: 30px;
  position: relative;
`;
const Icon = styled.span`
  width: 20px;
  height: 20px;
  position: absolute;
  top: 50%;
  left: 10px;
  transform: translateY(-50%);
`;
export default SearchBar;
