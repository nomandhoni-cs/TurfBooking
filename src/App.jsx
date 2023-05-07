import { Typography } from '@mui/material';
import './App.css'
import SearchForm from './Components/SearchForm/SearchForm';


function App() {
  return (
    <>
    <div className='heroBanner'>
    <Typography sx={{fontWeight: "600", color:"#fff"}} variant="h3" gutterBottom>The easiest way to book Turf</Typography>
    <SearchForm />
    </div>
    </>
  );
}

export default App;
