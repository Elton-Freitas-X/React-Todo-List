import {createGlobalStyle} from 'styled-components'


 const globalStyle = createGlobalStyle`
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande';
    }

    body{
        background: linear-gradient(
            rgba(48,16, 255, 1) 0%,
            rgba(100, 115, 255, 1) 100%
        );
    }
`

export default globalStyle;