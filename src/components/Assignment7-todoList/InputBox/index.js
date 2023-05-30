import {CustomHeading,CustomSpan,NewTodoBox,NewTodoButton} from "./styledComponents"

const NewTodo = (props) =>{

    const getNewTodo = () =>{
        const newTodo = document.getElementById("inputBox").value;
        if(newTodo===""){
            alert("Please Enter a value in todo");
            return;
        }
        else{
            document.getElementById("inputBox").value = "";
            return props.getNewTodo(newTodo);
        }
    }

    return(
        <>
            <CustomHeading><CustomSpan>Create</CustomSpan>Task</CustomHeading>
            <NewTodoBox id="inputBox" placeholder="What needs to be done?" /><br />
            <NewTodoButton type="button" id="addTaskBtn" onClick={getNewTodo}>Add</NewTodoButton>
        </>
            
    )
}

export default NewTodo;