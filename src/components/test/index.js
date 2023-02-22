import { useState,useEffect } from "react";

const Todo = () =>{
    const [todos,setTodos] = useState([{key: "value"}]);

    useEffect(()=>{
        function fetchTodos(){
            fetch("https://6325a6b74cd1a2834c41e69e.mockapi.io/todo-list/todos")
            .then(res=>res.json())
            .then(data=>{
                console.log(data);
            })
        }
        if(todos.length===0){
            fetchTodos();
        }
        else{
            console.log(todos);
        }
    },[]);

    return(
        <div>
            klklkkl
        </div>
    )
}
export default Todo;