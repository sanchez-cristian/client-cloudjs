import { Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`
    height: fit-content; 
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: baseline;
    background-color: #fff;
    padding-block: 3vw; 
`

export const Title = styled.h1`
    height: fit-content;
    width: fit-content;
    color: #000;
    font-size: 2rem;
    font-family: 'dm-mono-semibold', monospace;
    margin-right: 40px;
`

export const NavList = styled.ul`
    height: fit-content; 
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: flex-start;
    align-items: center;
    list-style: none; 
    gap: 20px; 
`

export const Item = styled(Link)`
    height: fit-content;
    width: fit-content;
    color: #000;
    font-size: 1.1rem;
    color: ${(props) => props.id ? '#000' : '#898989'}; 
    font-weight: 500;
    transition: color 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        color: #000;
        cursor: pointer;
    }
`
