export default function Todo(props) 
{
    return(
        <>
        <div className="todo">
            <div className="msges">
                {props.todo.length ===0 ? 
                <div className="no-todo">
                    No Todos
                </div> : 
                <div className="todos">
                    Hey
                </div>
                }
            </div>
        </div>
        </>
    )
}