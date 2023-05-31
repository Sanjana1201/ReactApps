import { useState } from "react";
import {InputStyles} from '../styledComponent'


const CreditCard = () => {
    const [cardNumber, setCardNumber] = useState("");
    const [cardHolder, setCardHolder] = useState("");

    const changeCardNumber = (e) =>{
        console.log(e.target.value);
        setCardNumber(e.target.value);
    }

    const changeCardHolder = (e) =>{
        setCardHolder(e.target.value);
    }

    return (
        <div >
        <div>
            <h2>{cardNumber}</h2>
            <p>{cardHolder}</p>
        </div>
        <div>
            <InputStyles value={cardNumber} onChange={changeCardNumber} />
            <InputStyles onChange={changeCardHolder} value={cardHolder}/>
        </div>
        </div>
    );
}

export default CreditCard;