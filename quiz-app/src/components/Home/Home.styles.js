import styled from 'styled-components';

export const Wrapper = styled.main`
    width: 70%;
    max-width: 900px;
    min-height: 400px;
    margin: 1.6rem auto;
    padding: 1.6rem 2.5rem;
    display: flex;
    flex-flow: column wrap;
    justify-content: space-evenly;
    align-items: center;
    background: rgba(20, 33, 61, 0.8);
    border-radius: 20px;
`;
export const Heading = styled.section`
    width: 100%;
    padding: 20px 0 0 0;
    * {
        font-size: 1.3rem;
        font-weight: 200;
        color: #fff;
    }
`;
export const Container = styled.section`
    width: 100%;
    display: grid;
    grid-template: auto auto/ 1fr 1fr;
    gap: 20px;
    align-content: center;
`;

export const Form = styled.form`
width: 80%;
padding: .5rem ;
display: flex;
flex-direction: column;
justify-content: space-between;
gap: 20px;
align-items: center;

select {
    width: 100%;
    height: 40px;
    border-radius: 15px;
    padding: .1rem 1rem;
    color: (20, 33, 65);
    font-size: 1.3rem;
    &:focus {
        outline: none;
    }
}
input {
    width: 100%;
    height: 40px;
    border-radius: 15px;
    padding-left: 1rem;
    font-size: 1.2rem;

    &:focus {
        outline: none;
    }
}
button {
    width: 100%;
    height: 40px;
    font-size: 1.3rem;
    letter-spacing: 2px;
    border: none;
    color: #fff;
    background: rgb(20, 33, 61) ;
    border-radius: 20px;
}
`;

export const Answer = styled.div`
    /* width: 60%; */
    background-color: #fff;
    height: 60px;
    border-radius: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: rgba(20, 33, 61, 0.85);
    box-shadow: 3px 3px 4px rgba(229, 229, 229, 0.25);
    p {
        font-size: 1.6rem;
        background: none;
        color: #fff;
        }

`;
export const Span = styled.div`
    width: 170px;
    margin-left: auto;
    height: 40px;
    color: black;
    background: #E5E5E5;
    padding: 0;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 15px;

    button {
        font-size: 2.3rem;
        font-weight: bolder;
        height: 100%;
        width: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;
        background: none;
        }
    .p1 {
        border-right: 2px solid black;
        }
`;


