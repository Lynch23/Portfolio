import styled from 'styled-components'

export const Wrapper = styled.footer`
    width: 100%;
    height: 80px;
    padding: 10px 10px;
    position: absolute;
    display: grid;
    grid-template: auto / 4fr 1fr;
    align-items: center;
    bottom: 0;
    background-color: #111;

    span {
        color: #fff;
        display: flex;
        justify-content: end;
        align-items: flex-end;
        height: 100%;
    }
`;
export const Content = styled.div`
        width: 100%;
        display: flex;
        justify-content: space-around;
    p {
        font-size: 1.6rem;
        color: #fff;
        font-weight: 500;
     }
`;
