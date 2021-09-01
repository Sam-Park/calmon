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
      <button onClick={() => setFilterComponent('Information')}>Information</button>
      <button onClick={() => setFilterComponent('Games')}>Games</button>
      <button onClick={() => setFilterComponent('Video')}>Video</button>
      {filtered === 'All' ? (<div>{activities.filter(active => active.type === 'All').map(thing => 
        (<div key={thing.id}>{thing.name}</div>))}</div>) : <></> }
      {/* {filtered === 'All' ? (<div>{activities.filter(type => type === 'All').map(filteredType => {
       (
          <div key={filteredType.name}>{filteredType}a aaaaa</div> 

        )
      })
      } </div> ) : 'not' } */}
      {filtered === 'Information' ? (<div> Hello is this Information </div>) : '' }
      </>
    );
}

export default App;
