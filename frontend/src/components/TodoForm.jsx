import React from 'react'
import axios from 'axios'

const TodoForm = ({setTodos, fetchData}) => {

  const [newTodo, setNewTodo] = React.useState({
    body: ""
  })

  const handleChange = (e) => {
    setNewTodo(prev => ({
      ...prev,
      'body': e.target.value
    }))
    console.log(newTodo);
  }

  const postTodo = async () => {
    try {
      await axios.post('http://localhost:8000/api/todo/', newTodo)
      setNewTodo({'body': ''})
      fetchData()
    } catch (error) {
      console.log(error);
    }
  }


  return (

    <div>
      <input type="text" placeholder="Add Todo" className="input input-bordered input-info w-full max-w-xs" 
      onChange={handleChange} value={newTodo.body}
      onKeyDown={(e) => {
        if(e.key === 'Enter'){
          postTodo()
        }
      }}
      />
      <button className="btn btn-primary ml-2" onClick={postTodo}>Add</button>
    </div>
  )
}

export default TodoForm