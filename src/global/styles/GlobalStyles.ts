import { createGlobalStyle } from "styled-components";
import '../../fonts/Pokemon Classic.ttf';
import img from '../../assets/background.jpg';
export default createGlobalStyle`

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100%;
    background-size: cover;
    background-image: url(${img});
  }
  *, button, input {
    border: 0;
    outline: 0;
    font-family: Pokemon Classic;
  }
  
  a {
    text-decoration: none;
  }
  .DontShowIt {
    display: none !important;
  }
  
  :root {
    --THEME_COLOR_001: #DC2518;
    --THEME_COLOR_002: #140707;
    --THEME_COLOR_003: #FDA0A0;
    --THEME_COLOR_004: #B8B8B8;
    --THEME_COLOR_005: #EBEDEF;
    --THEME_COLOR_006: #FFFFFF;
    --THEME_COLOR_007: #A01E15;
    --THEME_COLOR_008: #5A5A5A;
    --THEME_COLOR_009: #002E66;
    --background: var(--THEME_COLOR_009);
    --search-area-background: var(--THEME_COLOR_001);
    --search-area-color: var(--THEME_COLOR_005);
    --search-area-background-button-hover: var(--THEME_COLOR_002);
    --search-area-input-background: var(--THEME_COLOR_003);
    --search-area-input-placeholder: var(--THEME_COLOR_007);
    --search-area-input-color: var(--THEME_COLOR_006);
    --items-area-title: var(--THEME_COLOR_008);
    --items-area-background: var(--THEME_COLOR_006);
    --items-image-border-limit: var(--THEME_COLOR_005);
    --items-image-background: var(--THEME_COLOR_005);
    --items-strong-title-color: var(--THEME_COLOR_002);
    --items-strong-description-color: var(--THEME_COLOR_004);
    --items-buttons-content-border: var(--THEME_COLOR_005);
    --items-button-background: var(--THEME_COLOR_005);
    --items-button-border: var(--THEME_COLOR_005);
    --items-button-border-hover: var(--THEME_COLOR_007);
    --items-button-color: var(--THEME_COLOR_003);
    --items-default-button-background: var(--THEME_COLOR_001);
    --items-default-button-background-hover: var(--THEME_COLOR_003);
    --items-default-button-border: var(--THEME_COLOR_001);
    --items-default-button-border-hover: var(--THEME_COLOR_003);
    --items-default-button-color: var(--THEME_COLOR_006);
  }
  @font-face {
    font-family: "Pokemon Classic";
    src: local("Pokemon Classic"),
     url("./fonts/Pokemon Classic.ttf") format("truetype");
    font-weight: bold;
    }
`;