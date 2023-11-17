// Write your code here
import './index.css'

const TodoItem = props => {
  const {todoItem, deleteTodo} = props
  const {id, title} = todoItem

  const onDelete = () => {
    deleteTodo(id)
  }

  return (
    <li className="todoItem-container">
      <p className="todo">{title}</p>
      <button className="button" type="button" onClick={onDelete}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
