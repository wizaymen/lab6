// NewTaskForm.js
import React, { useState } from 'react';
import './NewTaskForm.css'
function NewTaskForm({ onAddTask }) {
  const [taskText, setTaskText] = useState('');

  const handleInputChange = (e) => {
    setTaskText(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskText.trim() !== '') {
      onAddTask(taskText);
      setTaskText('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Task:
        <input type="text" value={taskText} onChange={handleInputChange} />
      </label>
      <button type="submit">Add Task</button>
    </form>
  );
}

export default NewTaskForm;
