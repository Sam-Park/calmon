import React, { useState } from 'react'
import { ButtonGroup } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import './App.css';
import activities from './data'
import Button from '@material-ui/core/Button';
import Header from './components/Header'



const button = makeStyles({
  root: {
    background: 'linear-gradient(45deg, #8559A0 30%, #8559A0 90%)',
    border: 0,
    borderRadius: 3,
    boxShadow: '3px 5px 2px rgba(133, 89, 160, .3)',
    color: 'white',
    height: 38,
    padding: '10px 30px',
    margin: '10px',
    '&:hover': {
      background: 'linear-gradient(45deg, #8559A0 30%, #c383eb 90%)',
      boxShadow: '3px 5px 2px rgba(133, 89, 160, .5)',
    },
    '&:focus': {
      background: '#4a1b9a',
      boxShadow: '3px 5px 2px rgba(133, 89, 160, .5)',
    },
  },
});


function App() {
  const classes = button();

  const [filtered, setFilterComponent] = useState('All')

    return (
      <div className='container'>
        <Header />
     <div className='button-container'>

      <ButtonGroup>
        <Button className={classes.root} rounded='true' onClick={() => setFilterComponent('All')}>All</Button>
        <Button className={classes.root} rounded='true' onClick={() => setFilterComponent('Informational')}>Informational</Button>
        <Button className={classes.root} onClick={() => setFilterComponent('Games')}>Games</Button>
        <Button className={classes.root} onClick={() => setFilterComponent('Video')}>Video</Button>
      </ButtonGroup>
     </div>
     <div className='activities-container'>

      {/* show all activites */}
      {filtered === 'All' ? (<div>{activities.map(item => 
        (<div className='activities' key={item.id}>
          <span className='activities-span'>{item.name}</span>
          </div>))}</div>) : <></> }
        {/* Show just games */}
      {filtered === 'Games' ? (<div>{activities.filter(
        active => active.type === 'Games').map(item => 
          (<div className='activities' key={item.id}>
          <span className='activities-span'>{item.name}</span>
          </div>))}</div>) : <></> }
        {/* Show just Informational */}
      {filtered === 'Informational' ? (<div>{activities.filter(
        active => active.type === 'Informational').map(item => 
          (<div className='activities' key={item.id}>
          <span className='activities-span'>{item.name}</span>
          </div>))}</div>) : <></> }
        {/* Show just Video */}
      {filtered === 'Video' ? (<div>{activities.filter(
        active => active.type === 'Video').map(item => 
          (<div className='activities' key={item.id}>
          <span className='activities-span'>{item.name}</span>
          </div>))}</div>) : <></> }
          </div>
      </div>
    );
}

export default App;
