import React from 'react';

const Form = ({inputText,setInputText,todos,setTodos,setStatus}) =>{
    const handleInput = (e) =>{
        //console.log(e.target.value);
        setInputText(e.target.value);
    }
    const handleSubmit = (e) =>{
        
        e.preventDefault();
        setTodos([
            ...todos,{text:inputText,completed:false,id:Math.random()*1000}
        ]);
        setInputText("");
    }

    const contextHandeler = (e1) =>{
        setStatus(e1.target.value);
    }

    return(
        <div>
            <form>
                <input 
                    value={inputText} 
                    onChange={handleInput} 
                    type="text" 
                    className="todo-input"
                 />
                <button 
                    onClick={handleSubmit} 
                    type="submit" 
                    className="todo-button">
                    <i className="fas fa-plus-square"></i>
                </button>
                <div className="select">
                    <select onChange={contextHandeler} name="todos" className="filter-todos">
                        <option value="all">All</option>
                        <option value="completed">Completed</option>
                        <option value="uncompleted">Uncompleted</option>
                    </select>
                </div>
            </form>
        </div>
        
    );
}

export default Form;