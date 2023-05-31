import styled from 'styled-components'

export const ItemContainer = styled.div`
    display: flex;
    padding: 10px;
`

export const ItemContentContainer = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    background-color: #afdee0;
    padding: 10px;
    border-left: 5px solid #1492a3;
    border-radius: 4px;
    margin-left: 10px;
`

export const ItemText = styled.p`
    margin: 7px 0 7px 0;
    text-decoration: ${(props)=> props.textDecor}
`
export const ItemButton = styled.button`
    border: 0;
    background-color: #afdee0;
    cursor: pointer;
`