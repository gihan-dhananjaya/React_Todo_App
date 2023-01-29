import React from "react";

const Todo = ({value,todos,setTodos,todo}) =>{

    const deleteHandle = () =>{
        console.log(todos);
        setTodos(
            todos.filter((e1)=>e1.id !==todo.id)
        )
    }

    const completeHandle = ()=>{
        setTodos(
            todos.map(item=>{
                if(item.id===todo.id){
                    return{
                        ...item, completed: !item.completed,
                    }
                }
                return item;
            })
        )
    }
    return(
        <div className="todo">
            <li className={`todo-item ${todo.completed ? "completed":''}`}>{value}</li>

            <button onClick={completeHandle}  className="check-button ">
                <i className="fas fa-check"></i>
            </button>

            <button onClick={deleteHandle} className="delete-button">
                <i className="fas fa-trash"></i>
            </button>

        </div>
    );
}

export default Todo;