// TaskList.js
import React, { useState } from 'react';
import NewTaskForm from './NewTaskForm';
import Task from './Task';

function TaskList() {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskText) => {
    setTasks([...tasks, { id: tasks.length + 1, text: taskText, subtasks: [], descriptions: [] }]);
  };

  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
  };

  const addSubtask = (taskId, subtaskText) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, subtasks: [...task.subtasks, { id: task.subtasks.length + 1, text: subtaskText, done: false }] };
        }
        return task;
      });
    });
  };

  const toggleSubtask = (taskId, subtaskId) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return {
            ...task,
            subtasks: task.subtasks.map((subtask) => {
              if (subtask.id === subtaskId) {
                return { ...subtask, done: !subtask.done };
              }
              return subtask;
            }),
          };
        }
        return task;
      });
    });
  };
  const addDescription = (taskId, description) => {
    setTasks((prevTasks) => {
      return prevTasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, descriptions: [...task.descriptions, description] };
        }
        return task;
      });
    });
  };

  return (
    <div>
      <NewTaskForm onAddTask={addTask} />
      {tasks.map((task) => (
        <Task key={task.id} task={task} onDeleteTask={deleteTask} onAddSubtask={addSubtask} onToggleSubtask={toggleSubtask} onAddDescription={addDescription} />
      ))}
    </div>
  );
}

export default TaskList;
