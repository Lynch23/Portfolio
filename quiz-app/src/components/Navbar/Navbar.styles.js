import styled from 'styled-components';

export const Wrapper = styled.nav`
width: 100%;
height: 80px;
padding: 0 37px;
display: flex;
align-items: center;
background: rgba(0, 0, 0, 0.87);
color: white;
`;

export const Logo = styled.span`
display: flex;
align-items: center;
`;

export const Content = styled.span`
width: 30%;
display: flex;
justify-content: space-between;
align-items: center;
margin-left: auto;
padding: 0 10px;

p {
    font-size: 1.6rem;
    
    &:hover {
        cursor: pointer;
    }
}

`;
