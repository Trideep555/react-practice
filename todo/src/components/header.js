import '../App.css';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
export default function Header(props) 
{
    const HandleFilt = (event)=>{
        props.setFilter(event.target.value);
    }
    return (
        <>
        <div className="heading">
        {props.heading}    
        </div> 
        <div className="container layer">
        <Button variant="primary" className='btn-task' onClick={()=> props.modal(true)}>Add task</Button>
        <Form.Select className='select' onChange={HandleFilt}  aria-label="Default select example">
        <option value="All">All</option>
        <option value="complete">Completed</option>
        <option value="incomplete">Not Completed</option>
        </Form.Select>
        </div>
        
        </>
    )
}