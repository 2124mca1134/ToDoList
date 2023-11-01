
import React, { useState } from 'react';
import './TdlStyle.css'
const TodoList = () => {
  const [task, setTask] = useState('');
  const [list, setlist] = useState([]);
  const [editIndex, setEditIndex] = useState(null);

  const inputChange = (e) => {
    setTask(e.target.value);
  };

  const addTask = () => {
    if (task) {
      if (editIndex !== null) {

        const updatedlist = [...list];
        updatedlist[editIndex] = task;
        setlist(updatedlist);
        setEditIndex(null);
      } else {


        setlist([...list, task]);
      }
      setTask('');
    }
  };

  const editTask = (index) => {
    setTask(list[index]);
    setEditIndex(index);
  };

  const deleteTask = (index) => {
    const updatedlist = list.filter((_, i) => i !== index);
    setlist(updatedlist);
    setEditIndex(null);
  };

  return (
    <>
    <div className='container text-center bg-secondary' >
      <h2 className='p-3'>Enter your Todo List</h2>
      <div className='my-3 p-3'>
        <input type="text" value={task} onChange={inputChange} />
        <button onClick={addTask}>{editIndex !== null ? 'Update' : 'Add'}</button>
      </div>
    </div>

<ul className='container text-center '   style={{listStyle: "none", backgroundColor:'Wheat'}}>
{list.map((task, index) => (
  <li key={index} className='d-flex gap-5 justify-content-center'>
    {task}{' '}
    <div className='li-btn'>
    <button className='editBtn' onClick={() => editTask(index)}>Edit</button>{' '}
    <button className='delBtn' onClick={() => deleteTask(index)}>Delete</button>
    </div>
  </li>
))}
</ul>
</>
  );
};

export default TodoList;