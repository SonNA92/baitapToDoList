import styled from "styled-components";

export const ContainerFluid = styled.div`
    padding:15px;
    margin-right:auto;
    margin-left:auto;
    border:5px solid ${(props) => props.theme.color}
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
`;

export const Container = styled.div`
    padding:15px;
    margin-right:auto;
    margin-left:auto;
    border:5px solid ${(props) => props.theme.color};
    background-color: ${(props) => props.theme.bgColor};
    color: ${(props) => props.theme.color};
`;
