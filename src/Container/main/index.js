import { Component } from 'react'
import Header from '../Header';
import Content from '../Content';
import EditText from '../../Component/Edit';

const TODO_OBJ = {value:'' , selected: false}

class Main extends Component {
    state = {
        todoInput: "",
        todoData: [],
        editData: false,
        activeIndex: null

    }

    componentDidMount() {
        const getDataFromLocalStorage = localStorage.getItem('todoData')
        if (getDataFromLocalStorage) {
            this.setState({ todoData: JSON.parse(getDataFromLocalStorage) })
        }

    }
    setDataToLocalStorage = () => {
        const { todoData } = this.state
        localStorage.setItem('todoData', JSON.stringify(todoData))
    }

    changeText = (e) => {
        const text = e.target.value
        this.setState({ todoInput: text })

    }

    addTaskHandler = () => {
        const { todoInput, todoData } = this.state;
        if (todoInput) {
            const todoObj = {...TODO_OBJ};
            todoObj.value = todoInput
            const tempArr = [...todoData]
            tempArr.push(todoObj)
            this.setState({ todoData: tempArr, todoInput: '' }, () => {
                this.setDataToLocalStorage()
            })

        }
    }

    removeTodoListItem = (index) => {
        const { todoData } = this.state
        const tempArr = [...todoData]
        tempArr.splice(index, 1)
        this.setState({ todoData: tempArr }, () => {
            this.setDataToLocalStorage()
        })
    }

    onDeleteTodoList = () => {
        this.setState({ todoData: [] }, () => {
            this.setDataToLocalStorage()
        })
    }


    showEditText = (index) => {
        const { editData } = this.state;
        this.setState({ editData:!editData, activeIndex: index })
    }

    onChangeTodoHandler=(index)=>{
        const { todoData } = this.state
        const tempArr = [...todoData]
        tempArr[index].selected = !tempArr[index].selected;
        this.setState({ todoData: tempArr }, () => {
            this.setDataToLocalStorage()
        })
    }

    onDeleteCheckedTodoData=()=>{
        const { todoData } = this.state
        const tempArr = [...todoData]
        const filterData = tempArr.filter(item=>item.selected!==true)
        this.setState({ todoData: filterData }, () => {
            this.setDataToLocalStorage()
        })
    }

    onChangeText = (text) => {
        const { todoData , activeIndex } = this.state
        const tempArray = [...todoData]
        const upDatedTodoData = tempArray[activeIndex]
        upDatedTodoData.value = text
        tempArray.splice(activeIndex, 1, upDatedTodoData)
        this.setState({ todoData: tempArray , editData:false}, () => {
            this.setDataToLocalStorage()
        })
    }

    render() {
        const { todoData, activeIndex, todoInput, editData } = this.state;

        const EditTodoValue = todoData[activeIndex] ? todoData[activeIndex].value : "";
        return (
            <>
                <Header todoInput={todoInput} changeText={this.changeText} addTaskHandler={this.addTaskHandler} />
                <Content todoData={todoData}
                    removeTodoListItem={this.removeTodoListItem}
                    onDeleteTodoList={this.onDeleteTodoList}
                    showEditText={this.showEditText} 
                    onChangeTodoHandler={this.onChangeTodoHandler}
                    onDeleteCheckedTodoData={this.onDeleteCheckedTodoData}/>
                {editData && <EditText onClose={() => this.setState({ editData: false })} EditTodoValue={EditTodoValue} onChangeText={this.onChangeText} />}
            </>
        )
    }
}

export default Main;








