import {NewsHeaderCard} from 'react-ui-cards';
export default function Card(props) {
    return(<>
    <div className="movie">
    {props.card.map((item,index)=> (
    <NewsHeaderCard
    key={index}
    className='cards'
    thumbnail={item.backdrop_path!= null || item.poster_path!=null ? `https://image.tmdb.org/t/p/w500/${item.backdrop_path!=null ?  item.backdrop_path : item.poster_path}` : "https://t3.ftcdn.net/jpg/04/62/93/66/360_F_462936689_BpEEcxfgMuYPfTaIAOC1tCDurmsno7Sp.jpg"}
    title={props.value===0 ? item.title : item.name}
    author={item.vote_average===0 ||  item.vote_average===undefined ? "Unrated" :item.vote_average+'⭐'}
    date={props.value===0 ? item.release_date: item.first_air_date}
/>

))}
</div>
    </>)
}