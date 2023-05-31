import {useEffect, useState} from "react"
import {CustomHeading,CustomSpan} from "../InputBox/styledComponents"
import TodoItem from "./TodoItem/index.js"
import {NewTodoButton} from "../InputBox/styledComponents"

const AllTodos = (props) =>{

    const currState  = JSON.parse(localStorage.getItem('todoState'));
    const [displayTodo,setDisplayTodo] = useState(currState===null? "All":currState);


    const deleteItem = (currItem)=>{
        return props.removeItem(currItem);
    }

    const markDone = (currItem) =>{
        return props.handleChecked(currItem);
    }

    useEffect(()=>{
        localStorage.setItem('todoState',JSON.stringify(displayTodo));
    },[displayTodo])

    const RenderTodoList = () =>{
        const {ListTodo} = props;
        const NewTodoList = ListTodo.reduce((acc,eachTodo) =>{
            if(displayTodo==="All" || (displayTodo==="Active" && eachTodo.isDone===false) || (displayTodo==="Completed" && eachTodo.isDone===true)){
                return (
                    [...acc,<TodoItem TodoData = {eachTodo} handleDelete={deleteItem} handleChecked={markDone}/>]
                )
            }
            return acc
        },[]);
        return NewTodoList;
    }

    const handleDisplay = (e) =>{
        if(e.target.id==="all"){
            setDisplayTodo("All");
        }
        else if(e.target.id==="active"){
            setDisplayTodo("Active");
        }
        else{
            setDisplayTodo("Completed");
        }
    }

    return(
        <>
            <CustomHeading><CustomSpan>My</CustomSpan> Tasks</CustomHeading>
            <div>
                <NewTodoButton id="all" onClick = {handleDisplay}>All</NewTodoButton>
                <NewTodoButton id="active" onClick = {handleDisplay}>Active</NewTodoButton>
                <NewTodoButton id="completed" onClick = {handleDisplay}>Completed</NewTodoButton>
            </div>
            <div>
                {RenderTodoList()}
            </div>
        </>
    )
}

export default AllTodos;