import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'

import './Search.scss'

const Search = ({closeSearch, setSearch, search, backHeader}) => {

  return (
    <div className='search'>
        <div onClick={backHeader} className='svg'>
            <GlobalSvgIcons id='back'/>
        </div>
        <input onChange={(e) => setSearch(e.target.value)} value={search} type="text" placeholder='Поиск...' autoFocus/>
        <div className='svg' onClick={closeSearch}>
            <GlobalSvgIcons id='close'/>
        </div>
    </div>
  )
}

export default Search