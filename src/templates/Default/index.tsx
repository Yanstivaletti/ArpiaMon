import React from "react";
import ItemsArea from "../../components/ListArea";
import SearchBar from "../../components/Header";
import GlobalStyles from "../../global/styles/GlobalStyles";

import { Grid } from "./style";

const Default: React.FC = () => {
  return (
    <>
      <Grid>
        <SearchBar />

        <ItemsArea />
      </Grid>
      <GlobalStyles />
    </>
  );
};

export default Default;