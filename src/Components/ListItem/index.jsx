import { useState } from "react"
import GlobalSvgIcons from "../../assets/icons/GlobalSvgIcons"
import Modal from "../Modal"

import './ListItem.scss'

const ListItem = ({ showCards, todo, deleteTodo, editTodos }) => {
    const { id, title, content, date } = todo

    const [modal, setModal] = useState(false)
    const [editTitle, setEditTitle] = useState(title)
    const [editContent, setEditContent] = useState(content)

    const openModal = () => {
        setModal(true)
    }

    const closeModal = () => {
        setModal(false)
    }

    const editTodoFunction = () => {
        if(editTitle !== '') {
            editTodos(id, editTitle, editContent)
            setModal(false)
            setEditTitle(editTitle)
            setEditContent(editContent)
        }else {
            alert('Запольните все поля')
        }
    }

    return (
        <>
            <div className="listItem">
                <div className={showCards ? "listItem__wrapper active" : "listItem__wrapper"}>
                    <h1 className="listItem__title">{title}</h1>
                    <p className="listItem__date">{date}</p>
                </div>
                <p className="listItem__text">{content}</p>
                <div className={content !== '' ? "listItem__buttons" : 'listItem__buttons active'}>
                    <button onClick={openModal}>
                        <GlobalSvgIcons id='edit' />
                        <h2>РЕДАКТИРОВАТЬ</h2>
                    </button>
                    <button onClick={() => deleteTodo(id)}>
                        <GlobalSvgIcons id='trash' />
                        <h2>Удалить</h2>
                    </button>
                </div>
            </div>
            <Modal text='Изменить' modal={modal} closeModal={closeModal} title={editTitle} setTitle={setEditTitle} content={editContent} setContent={setEditContent} addTodos={editTodoFunction}/>
        </>
    )
}

export default ListItem