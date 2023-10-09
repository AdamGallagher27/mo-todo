import React from 'react'
import { ListGroup } from 'react-bootstrap'

const Todo = (props) => {


  return (
    <ListGroup.Item>
			{props.todo.text}
		</ListGroup.Item>
  )
}

export default Todo