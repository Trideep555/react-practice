import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Todo(props) 
{
    console.log(props.todo.filter((ele)=> ele.status===props.filter))
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
                {props.todo.length ===0 || (props.todo.filter((ele)=> ele.status===props.filter).length==0 && props.filter!=="All") ? 
                <div className="no-todo">
                    No Todos
                </div> :
                props.filter!=="All" ?
                props.todo.filter((ele)=> ele.status===props.filter).map((item,index)=>
                <div className="todos" id={"todos-"+index} key={index}>
                    <div className="todo-name">
                        <input type="checkbox" className="check" value={index} onClick={HandleCheck} defaultChecked={props.filter=="complete" ? true: false}/>
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
                 : props.todo.map((item,index)=>
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
                    <i className="fa-solid fa-trash edit" onClick={()=> { let arr=[...props.todo]; delete arr[index]; props.setTodo(arr.filter(ele => ele)); toast.success("Todo Deleted Succesfully", {
                        position: "bottom-right",
                        autoClose: 5000,
                        hideProgressBar: false,
                        closeOnClick: true,
                        pauseOnHover: true,
                        draggable: true,
                        progress: undefined,
                        theme: "dark",
                        });  }}></i>
                    </div>
                </div>
                )
                } 
            </div>
        </div>
        <ToastContainer />
        </>
    )
}