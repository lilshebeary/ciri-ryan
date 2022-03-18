import styled from 'styled-components'
import { Link } from 'react-scroll'

export const Button = styled(Link)`
    border-radius: 50px;
    background: transparent;
    white-space: nowrap;
    padding: ${({big}) => (big ? '14px 48px' : '12px 30px')};
    color: ${({dark}) => (dark ? '#010606' : '#fff')};
    font-size: ${({fontBig}) => (fontBig ? '20px' : '16px')};
    /* outline: none; */
    border: .5px solid grey;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;

    &:hover {
        transition: all 0.2s ease-in-out;
        background: '#242526';
        color: 'white'
    }

`;