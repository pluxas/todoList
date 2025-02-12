import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'
import './Navbar.scss'

const Nav = ({ showCards, setShowCards }) => {
  return (
    <div className='Nav'>
      <h className="Nav__title">Все заметки</h>
      <div onClick={() => setShowCards(!showCards)}>
        {showCards ?
          <div className='Nav__block'>
            <GlobalSvgIcons id='grid' />
            <p className='Nav__block-title'>Сетка</p>
          </div> :
          <div className='Nav__block'>
            <GlobalSvgIcons id='list' />
            <p className='Nav__block-title'>Список</p>
          </div>}
      </div>
    </div>
  )
}

export default Nav