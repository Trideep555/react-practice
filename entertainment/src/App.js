import './App.css';
import NavBar from './components/navbar';
import BottomNav from './components/bottom_nav';
import SearchBar from './components/searchbar';
import Filter from './components/filter';
import Card from './components/cards';
import { useEffect, useState } from 'react';
import axios from 'axios';   
import {Oval} from 'react-loader-spinner'
import Modal from './components/modal';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [value, setValue] = useState(0);
  const[data,setData]=useState("Now Playing");
  const [card,setCard]=useState([]);
  const [loading,isLoading]=useState(true);
  const [page,setpage]= useState(1);
  const [totalPage,setTotalPage] = useState(1);
  const [query,setQuery] =useState("")
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState("");
  
  useEffect(()=>{
    
    isLoading(true);
    if(value===0 && data!==""){
      if(query===""){
    let newdata=data.toLowerCase().split(" ").join("_");
    axios.get(`https://api.themoviedb.org/3/movie/${newdata}?api_key=${process.env.REACT_APP_MOVIE_API}&page=${page}`).then(res =>{ 
    setCard(res.data.results);
    setTotalPage(res.data.total_pages);
    
    isLoading(false);

  })
  }
else{
  axios.get(`https://api.themoviedb.org/3/search/movie?query=${query}&api_key=${process.env.REACT_APP_MOVIE_API}&page=${page}`).then(res =>{ 
    setCard(res.data.results);
    setTotalPage(res.data.total_pages);
    
    isLoading(false);
  });
}
}
  if(value===1 && data!==""){
    if(query===""){
    let newdata2=data.toLowerCase().split(" ").join("_");
    axios.get(`https://api.themoviedb.org/3/tv/${newdata2}?api_key=${process.env.REACT_APP_MOVIE_API}&page=${page}`).then(res =>{ 
    setCard(res.data.results);
    setTotalPage(res.data.total_pages);
    isLoading(false);      
  })
}
else{
  axios.get(`https://api.themoviedb.org/3/search/tv?query=${query}&api_key=${process.env.REACT_APP_MOVIE_API}&page=${page}`).then(res =>{ 
    setCard(res.data.results);
    setTotalPage(res.data.total_pages);
    
    isLoading(false);
  });
}


}
 if(value===2 && data!=="")
 {
    if(query==="")
    {
      let songdata=data.toLowerCase();
      axios.get(`https://saavn.me/search/${songdata}?query=-&page=${page}`).then(res =>{ 
    setCard(res.data.data.results);
    setTotalPage(res.data.data.total);
    isLoading(false);
  });
    }
    else{
      axios.get(`https://saavn.me/search/all?query=${query}&page=${page}`).then(res =>{ 
      setCard(res.data.data.songs.results);
    setTotalPage(1);
    isLoading(false);
  });
    }
 }  
 if(value===3 && data!=='')
 {
    if(query==='')
    {
      let gamedata=data.toLowerCase();
      axios.get(`https://api.rawg.io/api/${gamedata}?page=${page}&page_size=20&key=${process.env.REACT_APP_GAMES_API}`).then(res =>{ 
      setCard(res.data.results);
    setTotalPage(res.data.count/20);
    isLoading(false);
  });
    }
    else{
      axios.get(`https://api.rawg.io/api/games?page=${page}&page_size=20&key=${process.env.REACT_APP_GAMES_API}&search=${query}`).then(res =>{ 
      setCard(res.data.results);
    setTotalPage(res.data.count/20);
    isLoading(false);
  });
    }
 }
      
    
  },[data,value,page,query]) 


  return (
    <>
      
      <NavBar />
      <SearchBar title={value} query={query} setQuery={setQuery} />
      <Filter filter={value} query={query} setQuery={setQuery} page={setpage} total_page={setTotalPage} setData={setData} data={data} />
      <div className="loader">
          {loading ? <Oval
  height={80}
  width={80}
  color="#f0f8ff"
  wrapperStyle={{}}
  wrapperClass=""
  visible={true}
  ariaLabel='oval-loading'
  secondaryColor="#fffff"
  strokeWidth={2}
  strokeWidthSecondary={2}

/>:  ""}
      </div>
      <Card card={card} value={value} query={query} data={data} setModalShow={setModalShow} modaldata={modalData} setModalData={setModalData}  />
      <div className="load-more">
       {page-1===0 ? "" : <><button type='text' onClick={()=> setpage(page-1)} className='more'>Previous</button></> }
       {totalPage<page+1 ? "" : <><button type='text' onClick={()=> setpage(page+1)} className='more'>Next</button></> }
      </div>
      <BottomNav query={query} setQuery={setQuery}  value={value} page={setpage} total_page={setTotalPage} data={data} setData={setData} setValue={setValue}/>
      <Modal  modalShow={modalShow} setModalShow={setModalShow} data={modalData} setdata={setModalData}   />
    </>
  );
}

export default App;
