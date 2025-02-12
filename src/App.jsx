import { useEffect, useState } from "react"
import Header from "./components/Header"
import ListItem from "./Components/ListItem"
import Nav from "./Components/Navbar"
import Button from "./Components/Button"
import Modal from "./Components/Modal"

const getTodos = () => {
  const todos = localStorage.getItem('todos')

  if(todos) {
    return JSON.parse(todos)
  } else {
    return []
  }
}

function App() {
  const [showCards, setShowCards] = useState(false)
  const [modal, setModal] = useState(false)
  const [todos, setTodos] = useState(getTodos)
  const [title, setTitle] = useState('')
  const [content, setContent] = useState('')
  const [search, setSearch] = useState('')

  const month = new Date().getMonth() + 1
  const date = `${new Date().getDate()}.${month >= 10 ? month : '0' + month}.${new Date().getFullYear()}`

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos))
  }, [todos])

  const addTodos = () => {
    if (title !== '') {
      const newTodo = {
        id: Math.random().toString(36).substring(2, 9),
        title,
        content,
        date
      }
      setTodos([...todos, newTodo])
      setModal(false)
      setTitle('')
      setContent('')
    }
  }

  const editTodos = (id, title, content) => {
    const newTodo = todos.map(todo => {
      if(todo.id === id) {
        todo.title = title
        todo.content = content
        todo.date = date
      }
      return todo
    })
    setTodos(newTodo)
  }

  const deleteTodo = (id) => {
    setTodos([...todos.filter(todo=> todo.id !== id)])
  }

  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <Header search={search} setSearch={setSearch}/>
      <div className="container">
        <Nav setShowCards={setShowCards} showCards={showCards} />
        <div className={showCards ? "cards active" : "cards"}>
          {todos.filter(todo => todo.title.toLowerCase().includes(search.toLowerCase())).map((todo, index) => (
            <ListItem key={index} showCards={showCards} todo={todo} deleteTodo={deleteTodo} editTodos={editTodos}/>
          ))}
        </div>
      </div>
      <Button setModal={setModal} />
      <Modal text='Добавить' modal={modal} setModal={setModal} title={title} setTitle={setTitle} content={content} setContent={setContent} addTodos={addTodos} closeModal={closeModal}/>
    </>
  )
}

export default App
