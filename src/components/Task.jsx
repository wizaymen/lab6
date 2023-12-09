// Task.js
import React, { useState, useEffect } from 'react';
import './Task.css';

function Task({ task, onDeleteTask, onAddSubtask, onToggleSubtask, onAddDescription }) {
  const [subtaskText, setSubtaskText] = useState('');
  const [descriptionText, setDescriptionText] = useState('');
  const [showDescription, setShowDescription] = useState(false);
  const [entered, setEntered] = useState(false);

  useEffect(() => {
    // Trigger fade-in animation on mount
    setEntered(true);
  }, []);

  const handleSubtaskInputChange = (e) => {
    setSubtaskText(e.target.value);
  };

  const handleSubtaskSubmit = (e) => {
    e.preventDefault();
    if (subtaskText.trim() !== '') {
      onAddSubtask(task.id, subtaskText);
      setSubtaskText('');
    }
  };

  const handleDescriptionInputChange = (e) => {
    setDescriptionText(e.target.value);
  };

  const handleDescriptionSubmit = (e) => {
    e.preventDefault();
    onAddDescription(task.id, descriptionText);
    setDescriptionText('');
    setShowDescription(false);
  };

  const handleToggleDescription = () => {
    setShowDescription(!showDescription);
  };

  return (
    <div className={`task-container ${entered ? 'task-entered' : ''}`}>
      <div className="task-header">
        <strong className="task-description">{task.text}</strong>
        <button onClick={handleToggleDescription}>Get Descriptions</button>
        <button onClick={() => onDeleteTask(task.id)}>Delete</button>
      </div>
      {showDescription && (
        <div>
          <form onSubmit={handleDescriptionSubmit}>
            <label>
              Description:
              <input type="text" value={descriptionText} onChange={handleDescriptionInputChange} />
            </label>
            <button type="submit">Add Description</button>
          </form>
          <ul>
            {task.descriptions && task.descriptions.map((description, index) => (
              <li key={index}>{description}</li>
            ))}
          </ul>
        </div>
      )}
      <form onSubmit={handleSubtaskSubmit}>
        <label>
          Subtask:
          <input type="text" value={subtaskText} onChange={handleSubtaskInputChange} />
        </label>
        <button type="submit">Add Subtask</button>
      </form>
      <ul className="subtask-list">
        {task.subtasks.map((subtask) => (
          <li key={subtask.id}>
            <input
              type="checkbox"
              checked={subtask.done}
              onChange={() => onToggleSubtask(task.id, subtask.id)}
            />
            <label className={subtask.done ? 'subtask-done' : ''}>{subtask.text}</label>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Task;
