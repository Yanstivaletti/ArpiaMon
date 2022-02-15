import React, { useEffect, useState } from "react";
import { Api } from "../../Api";
import { delay } from "../../util/Delay/index";


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
        <select>
            <option value="0">All</option>
            <option value="1">Grass</option>
            <option value="2">Fire</option>
            <option value="3">Water</option>
            <option value="4">Ice</option>
            <option value="5">Fairy</option>
            <option value="6">Psychic</option>
            <option value="7">Normal</option>
            <option value="8">Fight</option>
            <option value="9">Flying</option>
            <option value="10">Ground</option>
            <option value="11">Rock</option>
            <option value="12">Bug</option>
            <option value="13">Poison</option>
            <option value="14">Dark</option>
            <option value="15">Dragon</option>
            <option value="16">Eletric</option>
            <option value="17">Steel</option>
            <option value="18">Ghost</option>
            </select>
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