import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
// import Spinner from 'react-bootstrap/Spinner';

function App() {

  let[data,setdata]=useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(()=>{
    axios.get('https://rickandmortyapi.com/api/character')
    .then(function (response) {
      // handle success
      // console.log(response.data);
      setdata(response.data.results);
      setLoading(false);
    })
    .catch(function (error) {
      // handle error
      console.log(error);
      setLoading(false); 
    })
  },[])
  return (
   <>
   <div className='header'>
      <img src={require(`./image/logo.png`)} className='logo'></img>
      <div className='menu'>
        <p>Docs</p>
        <p>About</p>
        <button className='support'>Support Us</button>

      </div>
   </div>
   <h1 className='title'>The Rick and Morty API</h1>
   <div className='black'>
        {
          data.map((ele,ind)=>{
            return(
              <>
              <div className='flex'>
                <div className='item'>
                  <img src={ele.image}></img>
                  <div className='cont'>
                    <p className='name'>{ele.name}</p>
                    <div className='point'>
                      <div className='round' style={{backgroundColor:ele.status==="Alive" ? '#55cc44':ele.status==="Dead" ? 'red': 'yellow'}}></div>
                      <p className='status'>{ele.status}-{ele.species}</p>
                    </div>
                    <p className='location'>Last known location:</p>
                    <p className='loc_name'>{ele.location.name}</p>
                    <p className='location'>First seen in:</p>
                    <p className='loc_name'>{ele.name}</p>
                  </div>
                </div>
              </div>              
              </>
            )
          })
        }
   </div>   
    <div className='dark'>
        <div className='foot_l'>
            <p>CHARACTERS: 826</p>
            <p>LOCATIONS: 126</p>
            <p>EPISODES: 51</p>
        </div>
        <div className='foot_stat'>
            <p>SERVER STATUS</p>
            <div className='round1'></div>
        </div>
        <div className='foot_img'>
          <div>
              <img src={require(`./image/Capture.png`)} className='foot_logo'></img>
          </div>
          <div>
              <h6 className='depl'>DEPLOYS BY</h6>
              <p className='net'>netlify</p>
          </div>
          <div className='cap_r'>
              <img src={require(`./image/Capture1.png`)} className='foot_logo'></img>
          </div>
          <div>
              <h6 className='depl'>POWERED BY</h6>
              <p className='net'>Stellate</p>
          </div>
        </div>
        <div className='foot_icon'>

        </div>
    </div>  
   </>
  );
}

export default App;
