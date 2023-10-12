import { useState, useEffect } from 'react'
import Todo from './Todo'
import { Button, Card, ListGroup } from 'react-bootstrap'

const TodoList = () => {


	

	let initialList = [
		{
			id: 0,
			text: 'this is the todo text',
			done: false
		},
		{
			id: 1,
			text: 'this is the other todo text',
			done: true
		},
	]
	
	const [textInput, setTextInput] = useState('')

	// if the list is in localstorage and its element is null
	// local storage has not started assign initial list
	// other wise use list in local storage
	const [list, setList] = useState(
		typeof(JSON.parse(window.localStorage.getItem('list'))[0]) === null ?
		initialList :
		JSON.parse(window.localStorage.getItem('list'))
	)

	// when list changes update local storage
	useEffect(() => {
		window.localStorage.setItem('list', JSON.stringify(list))
	}, [list])

	const markDone = (id) => {
		const newList = list.map((item) => {
			if (item.id === id) {
				item.done = true
			}

			return item
		})

		setList(newList)
	}

	const removeTodo = (id) => {
		const newList = list.filter((item) => item.id != id)
		setList(newList)
	}

	const addTodoItem = () => {

		let newTodo

		if (list.length === 0) {
			newTodo = {
				id: 0,
				text: textInput,
			}

		}
		else {
			newTodo = {
				id: list[list.length - 1].id + 1,
				text: textInput,
			}

		}

		setList([...list, newTodo])
	}


	const handleTextInput = (e) => {
		setTextInput(e.target.value)
	}

	const handleSumbit = (e) => {
		e.preventDefault()
		addTodoItem()
	}

	const todoArray = list.map((element) => {
		return <Todo key={element.id} todo={element} markDone={markDone} remove={removeTodo} />
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