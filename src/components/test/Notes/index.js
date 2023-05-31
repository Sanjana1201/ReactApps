import { useState } from "react";
import {InputStyles,StyledDiv,ButtonStyles} from "../styledComponent";

const Notes = () => {
    const [note,setNote] = useState([]);

    const addNewNote = () => {
        const newHeading = document.getElementById('noteHeading').value;
        const newBody = document.getElementById('noteBody').value;
        setNote([...note,{heading: newHeading, body: newBody}]);
    }

    const renderNotes = note.map((note,index) => {
        return (
            <div key={index}>
                <h3>{note.heading}</h3>
                <p>{note.body}</p>
            </div>
        )
    });

    return (
        <>
        <StyledDiv>
            <InputStyles id="noteHeading"/>
            <InputStyles id="noteBody"/>
            <ButtonStyles onClick={addNewNote}>
                Add Note
            </ButtonStyles>
            <div>
                {renderNotes}
            </div>
        </StyledDiv>

        </>
    );
}

export default Notes;