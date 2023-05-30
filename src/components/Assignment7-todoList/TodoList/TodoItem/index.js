import { ItemContainer,ItemContentContainer,ItemText,ItemButton } from './styledComponents'

const RenderTodoItem = (props) =>{

    const deleteTodo = ()=>{
        return props.handleDelete(props.TodoData.content);
    }

    const handleDone = ()=>{
        return props.handleChecked(props.TodoData.content);
    }

    return(
         <div>
         <ItemContainer id="item1">
            <input id="item1Checkbox" type="checkbox" onChange={handleDone} checked={props.TodoData.isDone}/>
            <ItemContentContainer id="item1Content">
                <ItemText id="item1Text" textDecor = {props.TodoData.isDone===true? "line-through":"none"}>{props.TodoData.content}</ItemText>
                <ItemButton id="item1Button" onClick={deleteTodo}><i className="fa-solid fa-trash-can"></i></ItemButton>
            </ItemContentContainer>
        </ItemContainer> 
        </div> 
    )
}

export default RenderTodoItem;