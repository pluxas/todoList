import { useState } from 'react'

import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import Search from '../Search'

import './Header.scss'

const Header = ({search, setSearch}) => {
  const [searchModal, setSearchModal] = useState(false)

  const openSearch = () => {
    setSearchModal(true)
  }

  const closeSearch = () => {
    setSearchModal(false)
    setSearch('')
  }

  const backHeader = () => {
    setSearchModal(false)
  }

  return (
    <>
      {searchModal ? <Search closeSearch={closeSearch} search={search} setSearch={setSearch} backHeader={backHeader}/> : <div className='header'>
        <h1 className='header__title'>Заметки</h1>
        <div onClick={openSearch} className='header__icon'>
          <GlobalSvgIcons id='search' />
        </div>
      </div>}
    </>
  )
}

export default Header