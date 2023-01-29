import React,{useState,useEffect} from 'react';
import './App.css';
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText,setInputText] = useState("");
  const [todos,setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodo,setFilteredTodo] = useState([]);

  useEffect(()=>{
    getLocalStorage();
  },[]);

  useEffect(()=>{
    filterHandler();
    saveLocalTodos();
  },[todos,status]);

  const filterHandler = ()=>{
    switch(status){
      case 'completed':
        setFilteredTodo(todos.filter(todo => todo.completed ===true))
        break;

      case 'uncompleted':
        setFilteredTodo(todos.filter(todo => todo.completed ===false))
        break;
      default:
        setFilteredTodo(todos)
    }
  }

  //save localstorage
  const saveLocalTodos = () =>{
    
    localStorage.setItem("todos",JSON.stringify(todos));
  };
  const getLocalStorage = () =>{
    if(localStorage.getItem("todos")===null){
      localStorage.setItem("todos",JSON.stringify([]));
    }else{
      let todoLocal = JSON.parse(localStorage.getItem("todos"));
      setTodos(todoLocal);
    }
  }

  return (
    <div>
     <header>
        <h1>Gd's Todo List</h1>
    </header>
    <Form
     inputText={inputText}
    setInputText={setInputText}
    todos={todos} 
    setTodos={setTodos}
    setStatus={setStatus}
    />
    <TodoList
     todos={todos} 
     setTodos={setTodos}
     filteredTodo={filteredTodo}
     />
    </div>
  );
}

export default App;
