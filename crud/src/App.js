import React, { useState, useEffect } from 'react';
import { FormGroup, Input, InputLabel, Button, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';


import './App.css'


export default function App() {
  const [ name, setName ] = useState('')
  const [ power, setPower ] = useState('')
  const [ items, setItems ] = useState([])


  


  function handleSubmit(e) {
    e.preventDefault();

    const newItem = {
      name,
      power,
      id: items.length + 1
    }
    
    setItems(items.concat(newItem))
    setName('')
    setPower('')

    console.log(name)
  } 

  function handleUpdate({ item_id }) {
    const func = items.find(item => item.id === item_id)

    setName(func.name)
    setPower(func.power)

    func.name = name
    func.power = power


    console.log(func)
  }

  function handleDelete({ item_id }) {
    // const func = items.find(item => item.id === item_id)
    // delete items[func.id -1]
    const index = items.indexOf(item_id)
    console.log('aaa', items);
    items.splice(index)
  }

  const useStyles = makeStyles(theme => ({
    table: {
      maxWidth: 650,
      // height: 500,
      // width: 500

    },
    form: {
      // height: 400,
      // width: 400,
    },

    container: {
      backgroundColor: '#fff'
    },
  }));
  
  
  const classes = useStyles();

  return (
    <div className="App">
     
      <FormGroup  className={classes.form}>
        <InputLabel htmlFor="name" >Name</InputLabel>
       <Input id="name" value={name} onChange={e =>  setName(e.target.value)} />

       <InputLabel htmlFor="power" >Power</InputLabel>
       <Input id="power" value={power} onChange={e =>  setPower(e.target.value)} />

        <Button onClick={handleSubmit}>Add</Button>

      </FormGroup>
      <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">Power</TableCell>
            <TableCell align="right">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {items.map(item => {
           return ( <TableRow key={item.id}>
            <TableCell component="th" scope="row">
              {item.name}
            </TableCell>
            <TableCell  component="th" align="right">{item.power}</TableCell>
            <TableCell align="right"><Button onClick={() => handleUpdate({item_id: item.id})} startIcon={<EditIcon/>}></Button><Button onClick={() => handleDelete({item_id: item.id})} startIcon={<DeleteIcon/>}></Button></TableCell>
          </TableRow>) 
          })}
        </TableBody>
      </Table>
    </TableContainer>


    </div>

  );
}





