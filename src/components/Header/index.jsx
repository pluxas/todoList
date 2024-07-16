import styles from './Header.module.scss'
import moon from '../../assets/moon.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { searchByName } from '../store/searchTodoSlice'

const Header = ({handleClick, search, setSearch}) => {
  const dispatch = useDispatch()
  const {users, isLoading} = useSelector(state => state.search)  
  const [searchTerm, serSearchTerm] = useState('')


  const changeSearch = (e) => {
    serSearchTerm(e.target.value)
  }

  useEffect(() => {
    dispatch(searchByName(searchTerm));
  }, [searchTerm])

  return (
    <header className={styles['header']}>
        <h2 className={styles['header__title']}>TODO LIST</h2>
        <div className={styles['header__block']}>
          <input onChange={changeSearch} value={searchTerm} className={styles['header__input']} type="text" placeholder='Поиск задачи'/>
          <img onClick={handleClick} className={styles['header__img']} src={moon} alt="" />
        </div>
    </header>
  )
}

export default Header