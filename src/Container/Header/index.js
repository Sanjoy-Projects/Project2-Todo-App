import React from 'react'
import './index.css'
import Input from '../../Component/input'
const Header = (props) => {
    const {todoInput,changeText,addTaskHandler}= props
    return(
       <>
       <header className='main'>
       <div className='mainDiv'>
            <h1>Todo App</h1>
        </div>
        <Input todoInput = {todoInput}  changeText={changeText} addTaskHandler={addTaskHandler}/>
        </header>
        </>

    )
}

export default Header;

