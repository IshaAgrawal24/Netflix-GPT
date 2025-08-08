import Logo from './Logo'
import { userAvatar } from '../../config/Constant'

const Header = () => {
    return (
        <div className=' bg-gradient-to-b from-black w-screen'>
            <div className='px-10 flex justify-between items-center'>
                <Logo size={'sm'} />
                <img src={userAvatar} alt="user avatar" />
            </div>
        </div>
    )
}

export default Header