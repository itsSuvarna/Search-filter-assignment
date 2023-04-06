import React from 'react';
import'./App.css';
import {useState  } from 'react'


function App(){
  const SearchArr=[
    {name:'srushti',age:22},
    {name:'pooja',age:24},
    {name:'riyu',age:22},
    {name:'priya',age:24},
    {name:'sonali',age:23},
    {name:'sara',age:23},]

const[search,setSearch]=useState("")

function captureInput(e){
  setSearch(e.target.value)
}


  return(
    <>
    <h1>Search Bar</h1>
    <div className="main">
      <b>Search:</b><input onChange={captureInput}  />

      {
        SearchArr.filter((val)=>{
          return val.name.toLowerCase().includes(search.toLowerCase())
        })
        .map((x)=>{return <li>{x.name}</li>})
      }
      </div>
      </>

  );
}
export default App