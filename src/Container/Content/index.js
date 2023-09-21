import React from "react";
import './index.css'
import ListItem from "../../Component/ListItem";
const Content = ({ todoData = [], removeTodoListItem, showEditText ,onChangeTodoHandler , onDeleteCheckedTodoData}) => {
    return (
       
        <div className="todoText">
            {todoData.map(({value,selected},index) => {
                
                return <ListItem
                    key={index}
                    value={value}
                    selected = {selected}
                    removeTodoListItem={() => removeTodoListItem(index)}
                    showEditText = {()=>showEditText(index)}
                    onChangeTodoHandler = {()=>onChangeTodoHandler(index)}>
                </ListItem>

            })}
            {todoData.length > 0 && <button className="DeleteAllBtn" onClick={onDeleteCheckedTodoData}>Delete All</button>}
        </div>
    )
}

export default Content;


