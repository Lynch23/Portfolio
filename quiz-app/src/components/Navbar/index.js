import React from "react";
//styles
import { Wrapper, Content, Logo } from "./Navbar.styles";


const Navbar = () => {
    return (
        <Wrapper>
            <Logo>
                <h1>Quiz App</h1>
            </Logo>
            <Content>
                <p>LeaderBoard</p><p>Reset</p><p>Save</p>
            </Content>
        </Wrapper>
    )
};

export default Navbar;