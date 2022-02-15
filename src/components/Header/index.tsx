import React from "react";

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
      <Part01></Part01>
      <Part02>
        <FormArea>
          <SearchIcon />
          <Input autoFocus type="text" placeholder="Seach downloads" />
        </FormArea>
      </Part02>
      <Part03>
      
      </Part03>
    </>
  );
};

export default SearchBar;