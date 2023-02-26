import React from "react";

import styled, { css } from "styled-components";

interface status {
    status: string | any;
}

const DivStatus = styled.div<status>`

width: 0.6rem;
height: 0.6rem;
border-radius: 50px;
background-color: none;


${props =>  props.status == 'Alive' && css `background-color: green;`}

${props => props.status == 'Dead' && css `background-color: red;`}

${props => props.status == 'unknown' && css `background-color: gray;`}

`

export default DivStatus