import styled,{css} from 'styled-components'

export const StyledDiv = styled.div`
    display: flex;
    ${'' /* justify-content: center; */}
    align-items: center;
    padding-top: 50px;
    height: 100vh;
    flex-direction: column;
`;

export const Button1Css = css`
    height:50px;
    background-color: blue;
    font-size: 14px;
`

export const Button2Css = css`
    height:50px;
    background-color: green;
    font-size: 14px;
`

export const ButtonStyles = styled.button`
    background-color: grey;
    font-size: 12px;
`

export const InputStyles = styled.input`
    height: 50px;
    width: 300px;
`