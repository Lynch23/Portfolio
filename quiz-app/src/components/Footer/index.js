import React from "react";
//styles
import { Wrapper, Content } from "./Footer.styles";

const Footer = () => {
    return (
        <Wrapper>
            <Content>
                <p>About Me</p>
                <p>Contact Developer</p>
                <p>Quiz App</p>
            </Content>
            <span>@Copyright 2022</span>
        </Wrapper>
    )
};

export default Footer;