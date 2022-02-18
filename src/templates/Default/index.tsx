import React, {useEffect, useState} from "react";
import ItemsArea from "../../components/ListArea";
import SearchBar from "../../components/Header";
import GlobalStyles from "../../global/styles/GlobalStyles";
import Footer from "../../components/Footer"
import Loader from "../../components/Loader4Bubbles"
import { Grid } from "./style";

const Default: React.FC = () => {
const [searchPokemons, setSearchPokemons] = useState('')
const [loading, setLoading] = useState(true)

 useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    },1800);
  })

  return (
    <>
      <GlobalStyles />
 

      <Grid>
        <Loader show={loading} />
        <SearchBar searchPokemons={searchPokemons} setSearchPokemons={setSearchPokemons} />
        <ItemsArea searchPokemons={searchPokemons} />
        <Footer />
      </Grid>
    </>
  );
};

export default Default;