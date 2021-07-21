import React from 'react';

export default function Todo({ task, toggleCheckBox }) {
    function handleToDoClick() {
        toggleCheckBox(task.id);
    };

    return (
        <div>
            <label>
                <input type="checkbox" checked={task.complete} onChange={handleToDoClick} />
                {task.name}
            </label>
        </div>
    );
};
