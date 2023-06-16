// Write your code here

import './index.css'

const TodoItem = props => {
  const {input, button} = props
  const {id, title} = input

  const onButton = () => {
    button(id)
  }

  return (
    <li className="lists">
      <p className="para"> {title} </p>
      <button type="button" className="buttons" onClick={onButton}>
        Delete
      </button>
    </li>
  )
}

export default TodoItem
