import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
* {
    box-sizing:border-box;
    margin:0;
    padding:0;
    font-family: 'Hind Siliguri', sans-serif;
    --color-text:#cacad4;
    --color-background:black;
    --color-altBackground: #7a7878;
    --color-primary: #13b300;
    --color-danger: #b93232;
    --color-disabled: #a7a1a1;
    --large:150px;
    --small: 130px;
    --medium: 200px;
}`;
