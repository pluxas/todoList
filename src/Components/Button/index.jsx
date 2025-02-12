import GlobalSvgIcons from '../../assets/icons/GlobalSvgIcons'

import './Button.scss'

const Button = ({setModal}) => {
  return (
    <div onClick={() => setModal(true)} className='button'>
        <GlobalSvgIcons id='edit'/>
    </div>
  )
}

export default Button