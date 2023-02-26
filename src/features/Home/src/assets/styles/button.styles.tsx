import React from "react";

import styled, { css } from 'styled-components';

interface pageButton {
    page: number;
}

const Button = styled.button<pageButton>`



${props => 
    props.page == 1 && 
    css `
        display: none;
    
    
    `}

`

export default Button;