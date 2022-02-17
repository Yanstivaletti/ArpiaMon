// import styled from "styled-components";

// export const Container = styled.div`

// .modal-overlay {
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 1040;
//     width: 100vw;
//     height: 100vh;
//     background-color: rgba(0,0,0,0.5);
//   }
  
//   .modal-wrapper {
//     position: fixed;
//     top: 0;
//     left: 0;
//     z-index: 1050;
//     width: 100%;
//     height: 100%;
//     overflow-x: hidden;
//     overflow-y: auto;
//     outline: 0;
//   }
  
//   .modal {
//     z-index: 100;
//     background: white;
//     position: relative;
//     margin:20px auto;
//     border-radius: 3px;
//     max-width: 800px;
//     padding: 8px;
//     border-radius: 4px;
//   }
  
//   .modal-header {
//     display: flex;
//     justify-content: space-between;
//     border-bottom: 1px solid #ddd;
//     padding: 8px 0;
//     font-weight: bold;
//   }
  
//   .modal-button-close {
//     background: transparent;
//     border: none;
//     cursor: pointer;
//     font-size: 16px;
//   }
  
//   .modal-body {
//     padding: 8px 0;
//   }
  
//   .modal-footer {
//     display: flex;
//     flex-direction: row;
//     justify-content: flex-end;
//     padding: 8px 0;  
//   }
// `;

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
  background-color: #fff;
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
  background-color: #EFEFEF;
  margin-right: 10px;
`;

export const ImagePokemon = styled.img`
  align-self: center;
  width: 200px;
  height: 200px;
  margin-top: 20px;
`

export const ContainerAbilitys = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  margin-top: 20px;
`;

export const IdPokemon = styled.span`
  font-size: 12px;
`;