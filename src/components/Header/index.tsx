import React from "react";
import pokeball from "../../assets/pokeball.png"
import {
  FormArea,
  Input,
  Part01,
  Part02,
  Part03,
  SearchIcon,
} from "./style";

const SearchBar: React.FC = () => {
  return (
    <>
      <Part01> ArpiaMon </Part01>
      <Part02>
        <FormArea>
          <SearchIcon />
          <Input autoFocus type="text" placeholder="Search Pokemon" />
        </FormArea>
      </Part02>
      <Part03>
      <img src = {pokeball}></img>
      </Part03>
    </>
  );
};

export default SearchBar;