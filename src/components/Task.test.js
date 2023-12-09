// Task.test.js
import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'; // for additional matchers
import Task from './Task';

test('renders Task component', () => {
  const task = {
    id: 1,
    text: 'Test Task',
    subtasks: [],
    descriptions: [],
  };

  const { getByText } = render(<Task task={task} />);
  const taskElement = getByText('Test Task');

  expect(taskElement).toBeInTheDocument();
});

test('adds a subtask when form is submitted', () => {
  const onAddSubtaskMock = jest.fn();
  const task = {
    id: 1,
    text: 'Test Task',
    subtasks: [],
    descriptions: [],
  };

  const { getByLabelText, getByText } = render(<Task task={task} onAddSubtask={onAddSubtaskMock} />);
  const subtaskInputElement = getByLabelText('Subtask:');
  const addSubtaskButtonElement = getByText('Add Subtask');

  fireEvent.change(subtaskInputElement, { target: { value: 'Test Subtask' } });
  fireEvent.click(addSubtaskButtonElement);

  expect(onAddSubtaskMock).toHaveBeenCalledWith(1, 'Test Subtask');
});
