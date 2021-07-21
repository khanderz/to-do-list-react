import React from 'react';
import Todo from './Todo';

export default function TodoList({ tasks, toggleCheckBox }) {
    return (
        tasks.map(task => {
            return <Todo key={task.id} toggleCheckBox={toggleCheckBox} task={task} />
        })
    );
};
