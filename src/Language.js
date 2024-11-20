import React from 'react';
import { useDispatch } from 'react-redux';
import './App.css';

export default function Language() {

  const options = [
    {label: 'English',value: 'en'},
    {label: 'Polski',value: 'pl'},
    {label: 'Українська',value: 'ua'}
  ]

  const dispatch = useDispatch();

  function handleSelect(event) {

    dispatch({
      type:"UPDATE_DATA",
      payload:event.target.value      
    })

};

//  console.log({value})
 
    return (
    <>
      <div>
        <select className = 'form-select'  onChange={handleSelect}>
           {options.map(option =>(
              <option value= {option.value}>{option.label}</option>
           ))}

        </select>  

                                                           {/*
                                                              <p>{value}</p>
                                                           */}        
      </div>
    </>
    );
  }
  

{/*
  function handleSelect(event) {
    setValue(event.target.value) 

    
};

*/}