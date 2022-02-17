import styled from "styled-components"

export const ContainerViewPort = styled.div`
  min-height: 100vh;
  min-width: 100vw;
  background-color: rgba(0, 0, 0, 0.4);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const ContainerModal = styled.div`
  min-height: 400px;
  max-width: 600px;
  width: 100%;
  background-color: var(--THEME_COLOR_005);
  position: relative;
  z-index: 1;
  border-radius: 10px;
  padding: 20px;
`

export const ContainerIconClose = styled.div`
  width: 30px;
  height: 30px;
  position: absolute;
  top: 15px;
  right: 15px;
  cursor: pointer;
`;

export const ContainerInfoPokemon = styled.div`
  display: flex;
  flex-direction: column;
`

export const NamePokemon = styled.h1`
  font-size: 16px;
  margin-bottom: 10px;
`

export const ContainerTypePokemon = styled.div`
  display: flex;
`;

export const TypePokemon = styled.span`
  align-self: start;
  padding: 6px 15px;
  border-radius: 10px;
  background-color: #B8B8B8;
  border-color: #5A5A5A;
  border-style: solid;
  border-width: 2px;
  margin-right: 10px;
`;

export const ImagePokemon = styled.img`
  align-self: center;
  width: 200px;
  height: 200px;
  margin-top: 20px;
  border-radius: 10%; 
  background-color: #B8B8B8;
  border-color: #5A5A5A;
  border-style: solid;
  border-width: 2px;
  
`

export const ContainerAbilitys = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;

`;

export const IdPokemon = styled.span`
  font-size: 30px;
`;