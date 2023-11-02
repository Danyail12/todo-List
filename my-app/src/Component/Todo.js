import React, { useState } from 'react'
import './index.css'

const Todo = () => {
    const [itemsData,setItemsData]=useState();
const [latestData,setLastestData]=useState([]);
const additems=()=>{
    if(!itemsData){
        alert("plz filled your data")

    }else{
        // const updated=()=>{
        //     id: new Date().getTime().toString(),
        //     name : itemsData,
        // }
        setLastestData([...latestData,itemsData]);
    }
    setItemsData("");


}

    // const deletedItems=()=>{
    //     const inputed = itemsData.filter((index)=>{
    //         return current.id !== index
    //     })
    //     setItemsData(inputed);
    // }

const remove =() => {
return setLastestData([]);
}
  return (
    <>
     <div className='main'>
        <div>
            <figure>
                <img src='./images/todo.jpg' alt='images' className='images'/>
            <figcaption className='figcaption'>Add your Name ✌</figcaption>
            </figure>
            <div className='additems'>
                <input className='form-control' type='text' placeholder='✍ Add items' value={itemsData}
                 onChange={(e)=>setItemsData(e.target.value)}/>
                <i className="fa-solid fa-plus" onClick={additems}></i>
            </div>
            <div className='showitems'>
                {latestData.map((current)=>{
                    return (

                        <div className='eachitems'>
                <h3>{current}</h3>
                <div className='todo-btn'>
                <i className="fa-solid fa-pen-to-square"></i>
                <i className="fa-solid fa-trash"></i>
                </div>
            </div>
                )
                
                }
                )
                }
            </div>

            <div className='showitems'>
                <button className='btn' onClick={remove}><span>Remove All</span></button>
            </div>
        </div>
        </div> 
    </>
  )
}

export default Todo
