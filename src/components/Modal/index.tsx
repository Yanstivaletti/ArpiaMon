import React, { Dispatch, SetStateAction, useState } from 'react';
import { IoMdClose } from 'react-icons/io';
import { Api } from '../../Api';

import * as S from './styles'

interface ITeste {
    isShowingModal: boolean;
    setIsShowModal: Dispatch<SetStateAction<boolean>>;
    actualPokemon: any;
}

export const Modal: React.FC<ITeste> = ({ isShowingModal, setIsShowModal, actualPokemon }) => {
    return (
    	<>
    	  <S.ContainerViewPort>
    	      <S.ContainerModal>
    	          <S.ContainerIconClose onClick={() => setIsShowModal(!isShowingModal)}>
    	              <IoMdClose color="#000" size="30px" />
    	          </S.ContainerIconClose>
    	              {actualPokemon && (
    	                  <S.ContainerInfoPokemon>
    	                      <S.NamePokemon>{actualPokemon.name}</S.NamePokemon>
    	                      <S.ContainerTypePokemon>
    	                          {actualPokemon.types.map((element: any, index: number) => {
    	                              return (
    	                                  <S.TypePokemon key={index + 1}>{element.type.name}</S.TypePokemon>
    	                              )
    	                          })}
    	                      </S.ContainerTypePokemon>
    	                      <S.ImagePokemon 
    	                          src={actualPokemon.sprites.versions['generation-v']['black-white'].animated['front_default']} 
    	                          alt='GIF do Pokemon' 
    	                      />
    	                      <S.ContainerAbilitys>
															{actualPokemon.abilities.map((element: any, index: number) => {
																	return (
																			<S.TypePokemon key={index + 1}>{element.ability.name}</S.TypePokemon>
																	)
															})}
														</S.ContainerAbilitys>
														<S.IdPokemon>#{actualPokemon.id}</S.IdPokemon>
    	                  </S.ContainerInfoPokemon>
    	        )}
    	          </S.ContainerModal>
    	    </S.ContainerViewPort>
        </>
       
    )
};