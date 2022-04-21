import React from "react";

//Styles
import { Wrapper } from "./Button.styles";

const Button = (props) => (
    <Wrapper
    type="button"
    onClick={props.callback}
    >
        {props.text}
    </Wrapper>
);

export default Button;
