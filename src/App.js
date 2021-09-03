import React, { useState } from 'react'
import { ButtonGroup } from '@material-ui/core'
import './App.css';
import activities from './data'
import Button from '@material-ui/core/Button';
import Header from './components/Header'
import buttonStyle from './components/Themes'


function App() {
  const classes = buttonStyle();

  const [filtered, setFilterComponent] = useState('All')

  let count = 1;
  
    return (
      <div className='container'>
        <Header />
     <div className='button-container'>
      <ButtonGroup className={classes.btngrp}>
        <Button className={classes.root}  onClick={() => setFilterComponent('All')}>All</Button>
        <Button className={classes.root}  onClick={() => setFilterComponent('Informational')}>Informational</Button>
        <Button className={classes.root}  onClick={() => setFilterComponent('Games')}>Games</Button>
        <Button className={classes.root}  onClick={() => setFilterComponent('Video')}>Video</Button>
      </ButtonGroup>
     </div>

     <div className='activities-container'>
      {/* show all activites */}
      {filtered === 'All' ? (<div>{activities.map(item => 
        (<div className='activities' key={item.id}>
          <span className='activities-span'>{count++}{'. '}{item.name}</span>
          </div>))}</div>) : <></> }

        {/* Show just Informational */}
      {filtered === 'Informational' ? (<div>{activities.filter(
        active => active.type === 'Informational').map(item => 
          (<div className='activities' key={item.id}>
          <span className='activities-span'>{count++}{'. '}{item.name}</span>
          </div>))}</div>) : <></> }

        {/* Show just games */}
      {filtered === 'Games' ? (<div>{activities.filter(
        active => active.type === 'Games').map(item => 
          (<div className='activities' key={item.id}>
          <span className='activities-span'>{count++}{'. '}{item.name}</span>
          </div>))}</div>) : <></> }

        {/* Show just Video */}
      {filtered === 'Video' ? (<div>{activities.filter(
        active => active.type === 'Video').map(item => 
          (<div className='activities' key={item.id}>
          <span className='activities-span'>{count++}{'. '}{item.name}</span>
          </div>))}</div>) : <></> }
          </div>
      </div>
    );
}

export default App;



