import React from 'react'
import styles from './Modal.module.scss'

const Modal = ({openModal, handleCloseModal, modalValue, setModalValue, handleTaskClick}) => {

  const changeValue = (e) => {
    setModalValue(e.target.value)
  }

  return (
    <div className={styles[openModal ? 'modal__active' : 'modal']}>
        <div className={styles['modal__window']}>
            <h2 className={styles['modal__title']}>Добавить заметку</h2>
            <input onChange={changeValue} value={modalValue} className={styles['modal__input']} type="text" placeholder='Новая задача'/>
            <div className={styles['modal__block']}>
                <button onClick={handleCloseModal}>Отмена</button>
                <button onClick={handleTaskClick}>Добавить</button>
            </div>
        </div>
    </div>
  )
}

export default Modal