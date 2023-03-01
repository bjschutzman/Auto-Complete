import React, {useState} from 'react';
import './App.css';

const App = () => {
  let names = ['Brian', 'Emma', 'Eric', 'Brad', 'Dave', 'Val', 'Vlad', 'Derek', 'Adrienne', 'Alison', 'Greg', 'Grant', 'Hunter', 'Hannah', 'Sydney'];
  let suggestions = []
  const [value, setValue] = useState();
  const [list, setList] = useState();

  const autoComplete = (e) => {
    setValue(e.target.textContent)
  }

  const handleChange = (e) =>{
    setValue(e.target.value)
    names.forEach(el => {
      if (el.substring(0, e.target.value.length).toUpperCase() === e.target.value.toUpperCase()) {
        console.log(el);
        suggestions.push(el);
        setList(suggestions.map((x, index)=> {
          return <p key={index} onClick={e => autoComplete(e)}>{x}</p>
        }))
      } 
      if(e.target.value.length === 0) {
        setList('')
      }
    })
  }
  return (
    <div className='container'>
        <p>Type a name in and allow auto-complete</p>
      <div className='autoComplete'>
        <input type='text' onChange= {e => handleChange(e)} value={value}/>
      </div>
      {list}
    </div>
  );
}

export default App;
