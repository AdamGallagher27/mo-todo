import { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'

const Todo = (props) => {

  let done = props.todo.done
  const todo = props.todo

  const handleDelete = () => {
    props.remove(todo.id)
  }

  const handleClick = () => {
    props.markDone(props.todo.id)
  }

  let HTML = <>
    <span>{todo.text}</span>
    <div>
      <Button onClick={handleClick}>Complete</Button>
      <Button onClick={handleDelete}>Delete</Button>
    </div>
  </>

  if(done) {
    HTML = <>
    <del>{todo.text}</del>
    <Button onClick={handleDelete}>Delete</Button>
  </>
  }

  return (
    <ListGroup.Item className='d-flex justify-content-between'>
      {HTML}
    </ListGroup.Item >
  )
}

export default Todo