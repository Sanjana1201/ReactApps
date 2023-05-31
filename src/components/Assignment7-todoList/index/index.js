import {useState, useEffect} from 'react'
import {CustomHeading,TodoContainer} from './styledComponents'
import AddTodoBox from '../InputBox/index.js'
import TodoListContainer from '../TodoList/index.js'

const TodoApp = () => {

  // const storedData = JSON.parse(localStorage.getItem('todo'));
  const [TodoList,setTodoList] = useState([]);

  const AddTodo = (todo) =>{
    setTodoList((prevState) =>{
      const found = prevState.find((eachTodo)=>{
        return eachTodo.content.toLowerCase()===todo.toLowerCase()
      });
      if(found){
        alert('Already present');
        return prevState;
      }
      else{
        return [...prevState,{content :todo,isDone :false}];
      }
    })
  }

  const handleDelete = (currItem)=>{
    setTodoList((prevState) =>{
      return prevState.filter((eachTodo)=>{
        return eachTodo.content!==currItem;
      })
    })
  }

  const handleMarkedDone =(currItem)=>{
    setTodoList((prevState) =>{
      return prevState.map((eachTodo) =>{
        if(eachTodo.content===currItem){
          if(eachTodo.isDone){
            return ({content:currItem,isDone:false})
          }
          else{
            return ({content:currItem,isDone:true})
          }
        }
        else{
          return eachTodo;
        }
      })
    })
  }

  // useEffect(()=>{
  //   localStorage.setItem('todo',JSON.stringify(TodoList));
  // },[TodoList]);

  useEffect(()=>{
    const getInitialData = async()=>{
        const response = await fetch('https://6325a6b74cd1a2834c41e69e.mockapi.io/todo-list/todos');
        const data = await response.json();
        console.log(data);
        const myData = data.map((eachData)=>{
          return {
            content:eachData.title,
            isDone:eachData.is_active
          }
        });
        setTodoList(myData);
    }
    getInitialData();
  },[]);

  return (
    <>
    <TodoContainer>
        <CustomHeading>Todos</CustomHeading>
        <AddTodoBox getNewTodo = {AddTodo} />
        <TodoListContainer ListTodo = {TodoList} removeItem={handleDelete} handleChecked={handleMarkedDone}/>
    </TodoContainer>
    </>
  )

}

export default TodoApp;