import styled from 'styled-components';

export const Part01 = styled.div`
  grid-area: FT1;
  display: flex;
  background: var(--search-area-background);
  color: var(--search-area-color);
  align-items: center;
  padding-left: 24px;
  left: 0;
  bottom: 0;
  border-top: 1px solid var(--THEME_COLOR_003);
  > img {
    width: 10%;
  }
`;

export const Part02 = styled.div`
  grid-area: FT2;
  display: flex;
  background: var(--search-area-background);
  color: var(--search-area-color);
  align-items: center;
  border-top: 1px solid var(--THEME_COLOR_003);
  font-size: 70%;
  text-align: center;
`;

export const Part03 = styled.div`
  grid-area: FT3;
  display: flex;
  background: var(--search-area-background);
  color: var(--search-area-color);
  align-items: center;
  justify-content: flex-end;
  padding-right: 24px;
  border-top: 1px solid var(--THEME_COLOR_003);
  left: 0;
  bottom: 0;
  > img {
    width: 10%;
    border-radius: 50%;
    margin: 2px;
  }

`;