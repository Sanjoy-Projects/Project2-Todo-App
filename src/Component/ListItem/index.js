import './index.css'
import DeleteIcon from '@mui/icons-material/DeleteOutlineSharp'
import EditIcon from '@mui/icons-material/Edit'
import  Checkbox  from '@mui/material/Checkbox'
const ListItem = ({ value = '', removeTodoListItem , selected = false, showEditText , onChangeTodoHandler}) => {

    return (
        <div className="list">
            <div><Checkbox className='checkBox' checked={selected} onChange={onChangeTodoHandler}/></div>
            <span className='ListDiv'>{value}</span>
            <span className='span'>
                <DeleteIcon onClick={removeTodoListItem}/>
                <EditIcon className='EditBtn' onClick={showEditText}/>
            </span>

        </div>
    )
}

export default ListItem;


