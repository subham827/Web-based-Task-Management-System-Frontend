import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCheckCircle, faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

export const Todo = ({task, deleteTodo, editTodo, toggleComplete}) => {
  return (
    <div className={`Todo ${task.completed ? "completed" : "incompleted"}`}>
        <p  >{task.task}</p>
        <div>
        {!task.completed && <FontAwesomeIcon className="edit-icon" icon={faCheckCircle} onClick={() => toggleComplete(task.id)}/>}
        {!task.completed && <FontAwesomeIcon className="edit-icon" icon={faPenToSquare} onClick={() => editTodo(task.id)} />}
        <FontAwesomeIcon className="delete-icon" icon={faTrash} onClick={() => deleteTodo(task.id)} />
        </div>
    </div>
  )
}
