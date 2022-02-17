import React, { useEffect, useState } from 'react';
import { Api } from "../../Api";
import { delay } from "../../util/Delay/index";
import { Modal } from "../Modal/index";
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

type ItemsAreaProps = {
  searchPokemons: string;
}

const ItemsArea: React.FC<ItemsAreaProps> = ({searchPokemons}) => {
  const url = "/pokemon?offset=0&limit=151";
  const [dataFinded, setDataFinded] = useState([]);
  const [isShowModal, setIsShowModal] = useState(false);
  const [actualPokemon, setactualPokemon] = useState(null)

  useEffect(() => {
    (async () => {
      await delay(2000)
      fetchPokemons();
    })();
  }, []);

  const fetchPokemons = async () => {
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

  const openModal = () => {
    setactualPokemon(null);
    setIsShowModal(prev => !prev);
  };

  const handleClickActualPokemon = async (actualPokemon: number) => {
    await Api.get(`/pokemon/${actualPokemon}/`)
            .then((response: any) => {
              if (response) {
                setactualPokemon(response.data)
              }
            })
            .catch((error) => {console.log(error)})
  }

  return (
    <Container>
      <Title>
            <div>
              <Select></Select>
            </div>

      </Title>

      <ListItems>
        {dataFinded?.filter((data: any) => 
            data.name.toLowerCase().includes(searchPokemons.toLowerCase())
          ).map((data: any, idx: number) => {
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
                <ItemDetailsButtonsContent>
                  <ItemButton type="button" value="See Json" />
                  
                  <ItemButtonDefault 
                    onClick={() => {
                      openModal();
                      handleClickActualPokemon(idx + 1);
                    }} 
                    type="button" 
                    value="See this Pokemon" 
                  />
                </ItemDetailsButtonsContent>
              </ItemDetails>
            </ItemContent>
          );
        })}
        {isShowModal && <Modal isShowingModal={isShowModal} setIsShowModal={setIsShowModal} actualPokemon={actualPokemon} />}
      </ListItems>
    </Container>
  );
};

export default ItemsArea;