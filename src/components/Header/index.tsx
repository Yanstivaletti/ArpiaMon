import React, { Dispatch, SetStateAction } from "react";
import pokeball from "../../assets/pokeball.png"
import {
  FormArea,
  Input,
  Part01,
  Part02,
  Part03,
  SearchIcon,
} from "./style";

type SearchBarProps = {
  searchPokemons: string;
  setSearchPokemons: Dispatch<SetStateAction<string>>
}

const SearchBar: React.FC<SearchBarProps> = ({searchPokemons, setSearchPokemons}) => {
  return (
    <>
      <Part01> ArpiaMon 
      <img src = {pokeball}></img>
      </Part01>
      <Part02>
        <FormArea>
          <SearchIcon />
          <Input 
            autoFocus 
            type="text" 
            placeholder="Search Pokemon"
            value={searchPokemons}
            onChange={(event) => setSearchPokemons(event.target.value)}
          />
        </FormArea>
      </Part02>
      <Part03>
      
      </Part03>
    </>
  );
};

export default SearchBar;