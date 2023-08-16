import MovieIcon from '@mui/icons-material/Movie';
import TvIcon from '@mui/icons-material/Tv';
import MusicNoteIcon from '@mui/icons-material/MusicNote';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import Paper from '@mui/material/Paper';
export default function BottomNav(props) {
    return(<>
      <Paper  sx={{ position: 'sticky', bottom: 0, left: 0, right: 0, zIndex:'1000' }} elevation={3}>
      <BottomNavigation
        className='bottomnav'
        showLabels
        value={props.value}
        onChange={(event, newValue) => {
          props.setValue(newValue);
        }}
      >
        <BottomNavigationAction onClick={()=> { props.setData("Now Playing"); props.page(1); props.total_page(1); props.setQuery(""); }}  label="Movies" icon={<MovieIcon className='icon' />} />
        <BottomNavigationAction onClick={()=> { props.setData("Airing Today"); props.page(1); props.total_page(1); props.setQuery(""); }} label="TV Series" icon={<TvIcon className='icon' />} />
        <BottomNavigationAction onClick={()=> { props.setData("Songs"); props.page(1); props.total_page(1); props.setQuery(""); }} label="Music" icon={<MusicNoteIcon className='icon' />} />
        <BottomNavigationAction label="Games" icon={<SportsEsportsIcon className='icon' />} />
        
      </BottomNavigation>
    </Paper>
    </>)
}