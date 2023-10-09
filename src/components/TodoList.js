import { useState } from 'react'
import Todo from './Todo'
import { Button, Card, Form, ListGroup } from 'react-bootstrap'

const TodoList = () => {


	let initialList = [
		{
			id: 0,
			text: 'this is the todo text',
			done:true
		},
		{
			id: 1,
			text: 'this is the other todo text',
			done:false
		},
	]

	const [list, setList] = useState(initialList)
	const [textInput, setTextInput] = useState('')

	const handleTextInput = (e) => {
		setTextInput(e.target.value)
	}

	const handleSumbit = (e) => {
		e.preventDefault()
		setList([...list, <Todo key={list.length} todo={textInput} /> ])
	}

	const todoArray = list.map((element) => {
		return <Todo key={element.id} todo={element} />
	})

	return (

		<Card>
			<Card.Header>TodoList</Card.Header>
			<Card.Body>
				<ListGroup>
					{todoArray}
				</ListGroup>
			</Card.Body>
			<Card.Footer>
				<input type='text' onChange={handleTextInput} value={textInput} />
				<Button variant='primary' onClick={handleSumbit}>Add</Button>
			</Card.Footer>
		</Card>
	)
}

export default TodoList