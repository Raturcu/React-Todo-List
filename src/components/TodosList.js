import React from 'react'

const TodosList = ({todos, setTodos}) => {
  return (
    <div>
        {todos.map((todo)=>(
            <li className='list-item' key={todo.id}>
                <input                
                type="text"
                value={todo.title}
                className='list'
                onChange={(event)=>event.preventDefault()}
                />
                <button className="button-complete task-button">
                    <i className="fa fa-check-circle"></i>
                </button>
                <button className="button-edit task-button">
                    <i className="fa fa-check-circle"></i>
                </button>
                <button className="button-trash task-button">
                    <i className="fa fa-check-circle"></i>
                </button>
            </li>

        ))}
    </div>
  );
};

export default TodosList