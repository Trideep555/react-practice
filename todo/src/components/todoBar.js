
export default function Todo(props) 
{
    //console.log(props.todo);
    const HandleCheck = (event) =>{
        console.log("clicked")
        let arr=[...props.todo];
        arr[event.target.value]['status']=== 'incomplete' ? arr[event.target.value]['status']= 'complete' : arr[event.target.value]['status']= 'incomplete';
        props.setTodo(arr);  
    }
    return(
        <>
        <div className="todo">
            <div className="msges">
                {props.todo.length ===0 ? 
                <div className="no-todo">
                    No Todos
                </div> :
                props.todo.map((item,index)=>
                <div className="todos" id={"todos-"+index} key={index}>
                    <div className="todo-name">
                        <input type="checkbox" className="check" value={index} onClick={HandleCheck} defaultChecked={item.status==='complete'? true : false}/>
                        <div className="name">
                            <div className={`todo-heading ${item.status==='complete' ? 'checked' : ''}`} >
                            {item.title}
                            </div>
                            <div className="todo-daytime">
                            {item.time},&nbsp;{item.day}
                            </div>
                            
                            </div>
                    </div>
                    <div className="todo-button">
                    <i className="fa-solid fa-pen-to-square edit" onClick={()=> { props.modal(true); props.setdata(item); props.setdata({...item,index: index}); }}></i>
                    <i className="fa-solid fa-trash edit" onClick={()=> { let arr=[...props.todo]; delete arr[index]; props.setTodo(arr.filter(ele => ele));   }}></i>
                    </div>
                </div>
                )
                }
            </div>
        </div>
        </>
    )
}