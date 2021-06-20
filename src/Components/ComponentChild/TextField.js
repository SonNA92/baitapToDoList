import styled from "styled-components";
import React,{Fragment} from "react";


export const Input  = styled.input`
    border: 1px solid ${props=>props.theme.color};
    min-height:35px;
    height:35px;
    font-size:17px;
    width:auto;
    display:initial;

`;

export const Lable = styled.label`
    color:${props=>props.theme.color};
    width:auto;

`;

export const TextField = ({lable,...props})=>{
    return <span>
        <Lable>
            {lable}
        </Lable>
        <br/>
        <Input {...props}/>
    </span>
}