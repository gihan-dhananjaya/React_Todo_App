import React from "react";
import Todo from "./Todo";

const TodoList = ({todos,setTodos,filteredTodo}) =>{
    //console.log(todos);
    return(
        <div>
            <div className="todo-container">
                <ul className="todo-list">
                    {filteredTodo.map((todo)=>(
                        <Todo
                         key={todo.id} 
                         value={todo.text}
                         todos={todos}
                         todo={todo}
                         setTodos={setTodos}
                        />
                    ))}
                </ul>
            </div>
        </div>
    );
}

export default TodoList;