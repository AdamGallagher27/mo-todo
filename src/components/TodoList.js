import { useState } from 'react'
import Todo from './Todo'
import { Button, Card, ListGroup } from 'react-bootstrap'

const TodoList = () => {


	let initialList = [
		{
			id:0,
			text: 'this is the todo text',
		},
		{
			id:1,
			text: 'this is the other todo text',
		},
	]

	const [list, setList] = useState(initialList)
	const [textInput, setTextInput] = useState('')

	const addTodoItem = () => {
		let newTodo = {
			id: list[list.length - 1],
			text: textInput,
		}

		setList([...list, newTodo ])
	}

	const removeTodo = (id) => {
		console.log('delete id ' + id)
	}

	const handleTextInput = (e) => {
		setTextInput(e.target.value)
	}

	const handleSumbit = (e) => {
		e.preventDefault()
		addTodoItem()
	}

	const todoArray = list.map((element) => {
		return <Todo key={element.id} todo={element} remove={removeTodo} />
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