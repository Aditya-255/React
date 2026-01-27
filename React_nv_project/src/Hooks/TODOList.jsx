import React,{useState} from "react";
export default function TodoList() {
    const [todos,setTodos]=useState([]);
    const [inputVal,setInputVal]=useState("");

    const handleInput=(e)=>{
        setInputVal(e.target.value);
    };

    const addTodo=()=>{
        if(inputVal.trim() ==="") return;
        const newTodo={
            id: Date.now(),
            text: inputVal,
            completed: false,
        };
        setTodos([...todos, newTodo]);
        setInputVal("");
    };

    const deleteTodo=(id)=>{
        setTodos(todos.filter((x) => x.id !== id));
    };

    const toggleToDo=(id)=>{
        setTodos(
            todos.map((x) => 
                x.id === id ? {...x, completed: !x.completed} : x
            )
        );
    };

    return (
        <>
            Task : <input type="text" value={inputVal} onChange={handleInput}></input>
            <br />
            <br />
            <button className="bg-red-600" onClick={addTodo}>Add</button>
            <br />
            <br />
            <table border="1">
                 <thead>
                    <tr>
                        <th>Task</th>
                        <th>Completed</th>
                        <th>Actions</th>
                    </tr>
                    </thead>
                    <tbody>
                        {todos.map((todo) => (
                            <tr key={todo.id}>
                               
                                <td>{todo.text}</td>
                                <td>{todo.completed ? "Yes" : "No"}</td>
                                <td>
                                    <button className="bg-pink-500" onClick={() => toggleToDo(todo.id)}>Toggle</button>
                                    <button className="bg-amber-700" onClick={() => deleteTodo(todo.id)}>Delete</button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
            </table>
        </>
    );
}