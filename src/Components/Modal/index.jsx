import './Modal.scss'

const Modal = ({text, modal, setModal, title, setTitle, content, setContent, addTodos, closeModal}) => {
    const changeTitle = (e) => {
        setTitle(e.target.value)
    }

    const changeContent = (e) => {
        setContent(e.target.value)
    }

    return (
        <div className={modal ? 'modal active' : 'modal'}>
            <div className='modal__wrapper'>
                <h1 className='modal__wrapper-title'>{text} заметку</h1>
                <form action='' className='modal__wrapper-form'>
                    <div className='modal__group'>
                        <input onChange={changeTitle} value={title} type="text" required/>
                        <span className='bar'></span>
                        <label>Title</label>
                    </div>
                    <div className='modal__group'>
                        <input onChange={changeContent} value={content} type="text" required/>
                        <span className='bar'></span>
                        <label>Content</label>
                    </div>
                </form>
                <div className='modal__wrapper-btns'>
                    <button onClick={closeModal}>Отмена</button>
                    <button onClick={addTodos}>{text}</button>
                </div>
            </div>
        </div>
    )
}

export default Modal