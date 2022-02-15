import React, { useEffect, useState } from "react";
import { Api } from "../../Api";
import { delay } from "../../util/Delay/index";
import  Select  from "../Select/index";

import {
  Container,
  Title,
  ListItems,
  ItemContent,
  ItemImageContent,
  ItemImage,
  ItemDetails,
  ItemDetailsButtonsContent,
  ItemButton,
  ItemButtonDefault,
} from "./style";

const ItemsArea: React.FC = () => {
  const url = "/pokemon?offset=0&limit=20";
  const [dataFinded, setDataFinded] = useState([]);

  useEffect(() => {
    (async () => {
      await delay(2000)
      searchPokemons();
    })();
  }, []);

  const searchPokemons = async () => {
    await Api.get(url)
      .then((response: any) => {
        let results = response.data.results;
        if (results) {
          let dataUser = results;
          setDataFinded(dataUser);
          console.log(dataUser);
        }
      })
      .catch((err: any) => {
        console.error(err);
      });
  };

  return (
    <Container>
      <Title>
            <div>
              <Select></Select>
            </div>

      </Title>

      <ListItems>
        {dataFinded?.map((data: any, idx: number) => {
          return (
            <ItemContent key={idx}>
              <ItemImageContent>
                <ItemImage
                  src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/${
                    idx + 1
                  }.png`}
                />
              </ItemImageContent>
              <ItemDetails>
                <h3>{data.name}</h3>
                <span>
                  <strong>URL: </strong>
                  {data.url}
                </span>
                <ItemDetailsButtonsContent>
                  <ItemButton type="button" value="See Json" />
                  <ItemButtonDefault type="button" value="See this Pokemon" />
                </ItemDetailsButtonsContent>
              </ItemDetails>
            </ItemContent>
          );
        })}
      </ListItems>
    </Container>
  );
};

export default ItemsArea;