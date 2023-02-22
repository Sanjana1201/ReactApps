import { useState } from "react";

const data = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popular in the 1960s with the release of sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like PageMaker including versions of Lorem Ipsum."

const ReadMoreLess = () =>{
    const[status,setStatus] = useState("ReadLess");

    const getData = () =>{
        return status === 'ReadLess' ? data.slice(0,100):data;
    } 

    const changeStatus = ()=>{
        setStatus(status === "ReadLess"? "ReadMore" : "ReadLess");
    }

    return(
        <div>
            <p>{getData()}</p>
            <button onClick={changeStatus}>
                {status === "ReadLess"? "Read More" : "Read Less"}
            </button>
        </div>
    )
}

export default ReadMoreLess;