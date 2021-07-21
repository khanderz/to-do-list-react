import React from 'react'
import Todo from './Todo'

export default function TodoList({ tasks }) {
    return (
        tasks.map(task => {
            return <Todo key={task.id} task={task} />
        })
    )
}
