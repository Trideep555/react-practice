import 'bootstrap/dist/css/bootstrap.min.css'
import './App.css'
import Form from 'react-bootstrap/Form'
import { useState } from 'react'

function App() {
  const [query,setQuery]=useState("")
  const [error,seterror]=useState("");
  const [mode,setMode] = useState(false)
   const HandleSubmit = ()=>{
      try
      {
        setQuery(eval(query));
      }
      catch(e)
      {
        seterror("N/A");
        setQuery("");
      }
   }
  return (
    <>
    <div className={`calculator ${mode ? "light" : ""}`}>
      <div className="header">
      <div className='brand'>
        Casio
      </div>
      <div className="switch">
      <Form>
      <Form.Check // prettier-ignore
        type="switch"
        id="custom-switch"
        className='switch-btn'
        onClick={()=> setMode(!mode)}
        data-onstyle="warning"
      />
      </Form>
      </div>
      </div>
      <div className="screen">
        {query===""&& error===""? <>&nbsp;</> : query===""? error : query}
      </div>
      <div className={`buttons ${mode ? "lighter" : ""}`}>
        <div className="button" onClick={()=>setQuery("") }>
          A/C
        </div>
        <div className="button" onClick={()=>setQuery((-parseInt(query)).toString())}>
          +/-
        </div>
        <div className="button" onClick={()=>setQuery(query+"%")}>
          %
        </div>
        <div className="button" onClick={()=>setQuery(query+"/")}>
          :-
        </div>
        <div className="button" onClick={()=>setQuery(query+"7")}>
          7
        </div>
        <div className="button" onClick={()=>setQuery(query+"8")}>
          8
        </div>
        <div className="button" onClick={()=>setQuery(query+"9")}>
          9
        </div>
        <div className="button" onClick={()=>setQuery(query+"*")}>
          X
        </div>
        <div className="button" onClick={()=>setQuery(query+"4")}>
          4
        </div>
        <div className="button" onClick={()=>setQuery(query+"5")}>
          5
        </div>
        <div className="button" onClick={()=>setQuery(query+"6")}>
          6
        </div>
        <div className="button" onClick={()=>setQuery(query+"-")}>
          -
        </div>
        <div className="button" onClick={()=>setQuery(query+"1")}>
          1
        </div>
        <div className="button" onClick={()=>setQuery(query+"2")}>
          2
        </div>
        <div className="button" onClick={()=>setQuery(query+"3")}>
          3
        </div>
        <div className="button" onClick={()=>setQuery(query+"+")}>
          +
        </div>
        <div className="button" id="btn-0" onClick={()=>setQuery(query+"0")}>
          0
        </div>
        <div className="button" onClick={()=>setQuery(query+".")}>
          .
        </div>
        <div className="button" onClick={HandleSubmit}>
          =
        </div>
        
      </div>
    </div>
    </>
  )
}

export default App
