import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
:root {
    --bodyBackground: #0B2434;
    --appBackground : #F5F5F5;
    --diceBackground: #fff;
    --btnBackground: #5035FF;
    --isHeldBackground:#59E391;
}
* {
    box-sizing: border-box;
    margin: 0;
}
body {
    font-family: 'Inter', sans-serif;
    margin: 0;

    .app-body {
        max-width: 600px;
        background: var(--bodyBackground);
        height: 500px;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%,-50%);
        display: flex;
        justify-content: center;
        align-items: center;
        main {
            width: 90%;
            height: 450px;
            padding: 0 20px;
            background: var(--appBackground);
            border-radius: 10px;
            display: flex;
            flex-direction: column;
            justify-content: space-evenly;
            align-items: center;

            header {
                height: 150px;
                width: 80%;
                display: flex;
                flex-flow: column;
                justify-content: space-evenly;
                text-align: center;

                h1 {
                    font-size: 2.5rem;
                }
                p {
                    font-size: 1.2rem;
                }
            }
            
            .dice-container {
                display: grid;
                grid-template: auto auto / repeat(5, 1fr);
                gap: 1.5rem;
            }
            button {
                width: 150px;
                height: 60px;
                margin-top: 10px;
                border-radius: 10px;
                font-size: 1.4rem;
                font-weight: bold;
                font-family: 'Inter', sans-serif;
                border: none;
                background: #5035FF;
                color: var(--diceBackground);
                cursor: pointer;

                :focus {
                    outline: none;
                }
                :active {
                    box-shadow: inset 5px 5px 10px -3px rgba(0, 0, 0, 0.7);
                }
            }


        }
    }
}
`;