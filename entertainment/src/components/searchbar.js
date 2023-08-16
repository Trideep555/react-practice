export default function searchBar(props) {
    return(<>
    <div className="search-bar">
    <input type="search" className="searchbar" value={props.query} onChange={(event)=> props.setQuery(event.target.value)}  placeholder={props.title===0 ? "Search Movies" : props.title===1  ? "Search TV" : props.title===2 ? "Search Music" : "Search Games"} />
    </div>
    </>)
}