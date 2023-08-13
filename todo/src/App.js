import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/header'
import Todo from './components/todoBar';
import { useState } from 'react';
import  Modal  from './components/modal';
function App() {
  const [modalShow, setModalShow] = useState(false);
  const [todo,setTodo] = useState([]);
  const [filt,setFilt] = useState("All")
  const [modalData,setModalData]=useState({title:"",status:"incomplete",time:"",day:"",index:-1});
  return (
    <>
    <Header heading={"Todo List"} modal={setModalShow} filter={filt} setFilter={setFilt} />
    <Todo todo={todo} setTodo={setTodo} modal={setModalShow} setdata={setModalData} data={modalData} filter={filt}/>
    <Modal modalshow={modalShow} modal={setModalShow} todo={todo} setTodo={setTodo} data={modalData} />
    </>
  );
}

export default App;
