import React from "react";
//Styles
import { Wrapper, Number } from "./Die.styles";
 const  Die = (props) => {

    const styles = {
        backgroundColor: props.isHeld ? "#59E391" : "#fff"
    };
    return (
        <Wrapper 
        onClick={props.handleClick}
        style={styles}
        >
            <Number>{props.value}</Number>
        </Wrapper>
    );
};
export default Die;