import {NewsHeaderCard} from 'react-ui-cards';
export default function Card(props) {
    return(<>
    <div className="movie">
    {props.value===0 || props.value===1 ? props.card.map((item,index)=> (
    <NewsHeaderCard
    onClick={()=> { props.setModalShow(true); props.setModalData(item.id)}}
    
    key={index}
    className='cards'
    thumbnail={item.backdrop_path!= null || item.poster_path!=null ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path!=null ?  item.backdrop_path : item.poster_path}` : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"}
    title={props.value===0 ? item.title : item.name}
    author={item.vote_average===0 ||  item.vote_average===undefined ? "Unrated" :item.vote_average+'⭐'}
    date={props.value===0 ? item.release_date: item.first_air_date} 
/>

)) : props.value===3 ?props.card.map((item,index)=> (
    <NewsHeaderCard
    onClick={()=> { props.setModalShow(true); props.setModalData(item.id);}}
    key={index}
    className='cards'
    thumbnail={item.background_image ? item.background_image: item.image_background }
    title={item.name}
    author={item.rating ? item.rating+'⭐': item.games_count+" Games"}
    date={item.released}
    />

)) : props.query==="" ? props.card.map((item,index)=> (
     
    <NewsHeaderCard
    onClick={()=> { props.setModalShow(true); props.setModalData(item.id)}}
    key={index}
    className='cards'
    
    title={item.name}
    thumbnail={item.image ? item.image[2].link :  "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg" }
    author={props.data==='Songs' ? item.album? item.album.name:"" : props.data==='Artist' ? item.role:  item.language }
    date={item.year}
    
    /> )) : <>
    {props.card.map((item,index) => (
    <NewsHeaderCard
    onClick={()=> { props.setModalShow(true); props.setModalData(item.id)}}
    key={index}
    className='cards'
    
    title={item.title}
    thumbnail={item.image ? item.image[2].link :  "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg" }
    author={item.language}
   
    
    />
    ))}</>  }
</div>
    </>)
}