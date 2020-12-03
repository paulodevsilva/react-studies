import React, { useState } from 'react';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import './App.css';

export default function App() {
  const [ name, setName ] = useState('');
  const [ job, setJob ] = useState('');
  const [ items, setItems ] = useState([]);

  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name: name,
      job: job,
      id: items.length + 1
    }
    
    setItems(items.concat(newItem))
    setName('')
    setJob('')
  }

  function handleDelete({ item_id }) {
    const index = items.indexOf(item_id)
    console.log()
    items.splice(index, 1)
  }

  function handleUpdate({ item_id }) {
    const obj = items.find(item => item.id === item_id)
    obj.name = name
    obj.job = job
  }

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
         type="text"
         id="name"
         value={name}
         onChange={e => setName(e.target.value)}
         />
        <label htmlFor="job">Job</label>
        <input
         type="text"
         id="job"
         value={job}
         onChange={e => setJob(e.target.value)}
         />

          <button type="submit">Add</button>
      </form>

      {/* <ul>
        {items.map(item => {
          return <li key={item.id}>{item.name} </li>
        })}
      </ul> */}

<table border="1">
    <tr>
        <td>Name</td>
        <td>Job</td>
    </tr>
    {items.map(item => {
      return <tr key={item.id}>
        <td>{item.name}</td>
        <td>{item.job}</td>
      </tr>
    })}
   
</table>
      
    </div>

  
  );
}

