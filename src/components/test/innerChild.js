import "styled-components/macro"
import {ButtonStyles} from "./styledComponent"


const InnerChild = (props) =>{
    
    return (
        <div>
            <ButtonStyles css={props.buttonCSS}>changeColor</ButtonStyles>
        </div>
    )
}

export default InnerChild;