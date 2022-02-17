import React, {useState} from "react";
import ItemsArea from "../../components/ListArea";
import SearchBar from "../../components/Header";
import GlobalStyles from "../../global/styles/GlobalStyles";
import Footer from "../../components/Footer"

import { Grid } from "./style";

const Default: React.FC = () => {
  const [searchPokemons, setSearchPokemons] = useState('')

  return (
    <>
      <GlobalStyles />
      <Grid>
        <SearchBar searchPokemons={searchPokemons} setSearchPokemons={setSearchPokemons} />

        <ItemsArea searchPokemons={searchPokemons} />

        <Footer />
      </Grid>
    </>
  );
};

export default Default;