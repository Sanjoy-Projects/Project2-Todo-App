import  Modal  from "@mui/material/Modal"
import "./index.css"
import {  useState } from "react";
const EditText = ({onClose,EditTodoValue,onChangeText}) => {
    const [text,editText] = useState(EditTodoValue)

    function onUpdateText(event){
          const {value} = event.target
          editText(value)
    }
   return(
    <Modal
    open
    onClose={() => { }}
    style={{ display: "flex", justifyContent: "center", alignItems: "center" }}
    aria-labelledby="modal-modal-title"
    aria-describedby="modal-modal-description">
        <div className='modal'>
            <h4>Edit Text</h4>
            <input className="editInput" value={text} onChange={onUpdateText}></input>
            <div className="editBtn">
                <span className="spanBtn">
                <button className="saveBtn" onClick={()=>onChangeText(text)}>Save</button>
                <button className="cancelBtn" onClick={onClose}>Cancel</button>
                </span>
            </div>
        </div>
        </Modal>
   )
};

export default EditText;