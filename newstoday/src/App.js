import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Nav from './components/nav';
import Filter from './components/filter'
import Heading from './components/heading';
import Cards from './components/cards';
import axios from 'axios';   
import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
function App() {
  const [query,setquery] = useState({country:"in",category:"",q:"",pagesize:"8"});
  const [news,setnews]=useState();
  const [totalresult,setTotalResult] = useState();
  
  useEffect(()=>{
      
      axios.get(`https://newsapi.org/v2/top-headlines?country=${query.country}&category=${query.category}&q=${query.q}&pagesize=${query.pagesize}&apiKey=${process.env.REACT_APP_NEWS_API}`).then(res =>{ 
         setnews(res.data.articles); 
        setTotalResult(res.data.totalResults)

         })
      if(query.q!=="")
      {
        setquery({...query,q:""})
      }
    },[query]) 

  return (
    <>
    <Nav filt={query} setfilt={setquery} />
    <Filter filt={query} setfilt={setquery}/>
    <Heading title={query} />
    <Cards  data={news}/>
    {totalresult && totalresult>query.pagesize && <div className='d-flex justify-content-center'><Button variant="primary" className='load' onClick={()=> {setquery({...query,pagesize: (parseInt(query.pagesize)+8).toString()})}}>Load More</Button></div>}
    </>
  );
}

export default App;
