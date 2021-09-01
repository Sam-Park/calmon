import React, { useEffect, useState } from 'react'
import './App.css';
import activities from './data'

function App() {
  // const [{ name, type }] = activities
// console.log(activity)
  const [filtered, setFilterComponent] = useState('All')
  // console.log(filter)
    return (
      <>
      <button onClick={() => setFilterComponent('All')}>All</button>
      <button onClick={() => setFilterComponent('Informational')}>Information</button>
      <button onClick={() => setFilterComponent('Games')}>Games</button>
      <button onClick={() => setFilterComponent('Video')}>Video</button>
      {filtered === 'All' ? (<div>{activities.map(item => 
        (<div key={item.id}>{item.name}</div>))}</div>) : <></> }
      {filtered === 'Games' ? (<div>{activities.filter(
        active => active.type === 'Games').map(item => 
        (<div key={item.id}>{item.name}</div>))}</div>) : <></> }
      {filtered === 'Informational' ? (<div>{activities.filter(
        active => active.type === 'Informational').map(item => 
        (<div key={item.id}>{item.name}</div>))}</div>) : <></> }
      {filtered === 'Video' ? (<div>{activities.filter(
        active => active.type === 'Video').map(item => 
        (<div key={item.id}>{item.name}</div>))}</div>) : <></> }
      {/* {filtered === 'All' ? (<div>{activities.filter(type => type === 'All').map(filteredType => {
       (
          <div key={filteredType.name}>{filteredType}a aaaaa</div> 

        )
      })
      } </div> ) : 'not' } */}
      </>
    );
}

export default App;
