import { useState } from 'react'
import { ListGroup, Button } from 'react-bootstrap'

const Todo = (props) => {

  const [done, setDone] = useState(false)
  const todo = props.todo.text

  const handleDelete = () => {
    props.remove()
  }
  
  const handleClick = () => {
    setDone(!done)
  }

  
  return (
    <ListGroup.Item className='d-flex justify-content-between'>
      {!done ? (
        <>
          <span>{todo}</span>
          <Button onClick={handleClick}>Complete</Button>
          <Button onClick={handleClick}>Delete</Button>

        </>
      ) : (
        <>
          <del>{todo}</del>
          <Button onClick={handleClick}>Uncomplete</Button>
          <Button onClick={handleDelete}>Delete</Button>
        </>
      )}
    </ListGroup.Item>
  )
}

export default Todo